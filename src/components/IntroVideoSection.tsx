import type { SiteConfig } from "@/lib/content";
import { assetPath } from "@/lib/content";

type Props = { site: SiteConfig };

export function IntroVideoSection({ site }: Props) {
  const { introVideo } = site;
  const src = assetPath(introVideo.src);

  return (
    <section
      id="intro"
      className="scroll-mt-24 border-b border-brand-900/8 bg-gradient-to-b from-surface to-white py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            {introVideo.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950">
            {introVideo.headline}
          </h2>
          <p className="mt-3 text-brand-700">{introVideo.description}</p>
        </div>

        <div className="card-glow mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-brand-900/10 bg-brand-950 shadow-2xl shadow-brand-900/20">
          <video
            className="aspect-video w-full bg-brand-900 object-contain"
            controls
            playsInline
            preload="metadata"
            poster={introVideo.poster ? assetPath(introVideo.poster) : undefined}
            aria-label={introVideo.headline}
          >
            <source src={src} type="video/mp4" />
            <p className="p-6 text-center text-sm text-white/80">
              Your browser does not support embedded video.{" "}
              <a href={src} className="text-accent-400 underline">
                Download the intro video
              </a>
              .
            </p>
          </video>
        </div>
      </div>
    </section>
  );
}
