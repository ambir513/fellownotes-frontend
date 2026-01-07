import { VerifyEmail } from "@/components/verify-email/verify-email";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams?: { token?: string };
}) {
  const token = (await searchParams)?.token;
  if (!token) {
    return <div>Invalid token</div>;
  }
  return <VerifyEmail token={token} />;
}
