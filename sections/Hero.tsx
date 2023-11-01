import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Buttons {
  title: string;
  href: string;
}

export interface Props {
  image?: ImageWidget;
  primaryTitle?: string;
  secondaryTitle?: string;
  primaryButton?: Buttons;
  secondaryButton?: Buttons;
  /** @format textarea */
  description?: string;
}

export default function Hero({
  primaryTitle = "Let us find your",
  secondaryTitle = "Forever Home.",
  image = "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  primaryButton = { title: "Get Started", href: "https://deco.cx/" },
  secondaryButton = { title: "Learn More", href: "https://deco.cx/" },
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
}: Props) {
  return (
    <section
    style={{backgroundImage:`url(${image})`}}
      class={`relative bg-cover bg-center bg-no-repeat`}
    >
      <div class="absolute inset-0 bg-white/75 sm:from-white/75 sm:bg-transparent from-50% sm:to-transparent bg-gradient-to-r"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            {primaryTitle}
            <strong class="block font-extrabold text-rose-700">
              {secondaryTitle}
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl/relaxed">{description}</p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href={primaryButton.href}
              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              {primaryButton.title}
            </a>

            <a
              href={secondaryButton.href}
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              {secondaryButton.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
