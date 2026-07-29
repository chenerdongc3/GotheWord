# Production email Auth runbook (POR-25)

This runbook separates repository-enforced Auth policy from provider-console
operations. Never commit SMTP, CAPTCHA, DNS, OTP, session, or service-role
secrets. Production registration is not ready until every check below has
recorded evidence.

## Environment matrix

| Environment | Site URL | Allowed redirect |
| --- | --- | --- |
| local | `http://localhost:3000` | `http://localhost:3000` |
| preview | the exact HTTPS preview origin | the same exact preview origin |
| production | `https://chenerdongc3.github.io/GotheWord/` | `https://chenerdongc3.github.io/GotheWord/` |

Set `GOTHEWORD_AUTH_SITE_URL` and `GOTHEWORD_AUTH_REDIRECT_URL` per Supabase
project/environment before applying `supabase/config.toml`. Do not use wildcard
production redirects. Preview uses a separate Supabase project and CAPTCHA
key; never add an ephemeral preview hostname to the production allowlist.

## Provider setup and release evidence

1. Use a dedicated Auth subdomain and From address. In DNS publish the exact
   SPF and DKIM records supplied by the SMTP provider, then publish DMARC with
   aggregate reporting. Verify all three with the provider and an independent
   DNS lookup; save record names, provider verification IDs, and timestamps,
   but not secret values.
2. Disable link/open tracking for the Auth sending domain in the SMTP provider.
   Use a transactional stream isolated from marketing mail. Configure a
   verified backup SMTP provider before launch; if both providers are unhealthy,
   set `auth.enable_signup = false` and pause resend/recovery rather than
   weakening email confirmation.
3. Store SMTP credentials and the Turnstile secret in the environment secret
   manager. Rotate credentials after any exposure. Set the browser-only site
   key independently as `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
4. Apply Auth config to staging first. In the Supabase dashboard confirm email
   confirmation is enabled, OTP is six digits and expires in 600 seconds, resend
   frequency is 60 seconds, email/sign-up/verification limits match the checked
   config, and CAPTCHA is enabled. Confirm the deployed confirmation, recovery,
   and email-change template bodies contain `{{ .Token }}` and contain neither
   `{{ .ConfirmationURL }}` nor `{{ .TokenHash }}`. A checked-in template file
   does not update a hosted project by itself. Dashboard state is the deployed
   truth: attach a redacted export or screenshots to the release.
5. Confirm SMTP provider tracking is disabled and send confirmation and recovery
   messages to unrelated Gmail, Outlook, and one custom-domain mailbox. Check
   headers show SPF, DKIM, and DMARC pass and that no URL points to localhost or
   an incorrect Pages path.
6. Deploy the retired `register` function and remove its service-role secret.
   A POST must return HTTP 410 with `legacy_registration_disabled`; it must
   never be rolled back to `email_confirm=true` account creation.

Release evidence includes source SHA, Supabase project ref/config revision,
redacted SMTP configuration revision, DNS verification results, template test
message IDs, CAPTCHA hostname/key revision, rate-limit results, and the operator.

## Abuse and failure checks

- Server-side Auth calls must receive the token emitted by `BotChallenge` as
  `captchaToken`; a missing, expired, reused, or invalid token must fail.
- Confirm repeated sign-up/sign-in/OTP attempts reach the configured limit and
  return 429 without logging email, password, OTP, CAPTCHA token, or raw errors.
- Confirm resends remain disabled for at least 60 seconds in the client even if
  a request fails. A provider 429 must not trigger a second immediate request.
- Confirm an unverified account receives no session and cannot invoke the
  authenticated learning-state RPC or write `learning_states`.

## Rollback

Rollback is fail-closed: pause new sign-ups and email resend/recovery, preserve
existing sessions, diagnose SMTP/CAPTCHA, and restore the last verified provider
configuration revision. Never disable CAPTCHA, enable autoconfirm, deploy the
legacy service-role registration behavior, or loosen redirects. After recovery,
repeat external-mail, DNS-header, 429, CAPTCHA, and unverified-write checks before
re-enabling registration.
