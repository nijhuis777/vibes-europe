import Link from "next/link";
import { VibesLogoMark } from "@/components/icons/vibes-logo";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-midnight">
      <div className="text-center px-6">
        <VibesLogoMark size={80} className="text-navy-600 mx-auto mb-8" />
        <h1 className="font-display text-5xl text-white mb-4">404</h1>
        <p className="text-navy-400 text-lg mb-8">
          This page doesn&apos;t exist — yet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-coral-500 text-white font-medium rounded-xl hover:bg-coral-600 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
