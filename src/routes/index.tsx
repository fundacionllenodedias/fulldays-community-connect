import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-fulldias.png.asset.json";
import heroAsset from "@/assets/entrega-mercado.jpg.asset.json";
import hospitalAsset from "@/assets/acompanamiento-hospital.jpg.asset.json";
import citaAsset from "@/assets/cita-medica.jpg.asset.json";
import tramitesAsset from "@/assets/tramites-admisiones.jpg.asset.json";
import visualAsset from "@/assets/examen-visual.jpg.asset.json";
import cumpleanosAsset from "@/assets/cumpleanos.jpg.asset.json";
import grupalAsset from "@/assets/encuentro-grupal.jpg.asset.json";
import almuerzoAsset from "@/assets/almuerzo-compartido.jpg.asset.json";
import valiososAsset from "@/assets/somos-valiosos.jpg.asset.json";
import hospitalarioAsset from "@/assets/acompanamiento-hospitalario.jpg.asset.json";

const galeria = [
  { src: grupalAsset.url, alt: "Encuentro grupal de adultos mayores en la sede de FullDías" },
  { src: valiososAsset.url, alt: "Grupo de beneficiarios en la actividad “Somos valiosos”" },
  { src: tramitesAsset.url, alt: "Adulta mayor en silla de ruedas esperando en admisiones de un centro médico" },
  { src: citaAsset.url, alt: "Adulto mayor acompañado en su cita médica" },
  { src: visualAsset.url, alt: "Adulto mayor durante un examen visual" },
  { src: hospitalAsset.url, alt: "Voluntarias acompañando a una adulta mayor hospitalizada" },
  { src: hospitalarioAsset.url, alt: "Voluntario acompañando a una persona durante su hospitalización" },
  { src: almuerzoAsset.url, alt: "Almuerzo compartido con beneficiarios de la fundación" },
  { src: cumpleanosAsset.url, alt: "Adulto mayor soplando la vela de su torta de cumpleaños" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fundación FullDías | Llen@ de Días — Bello, Antioquia" },
      {
        name: "description",
        content:
          "Acompañamos a adultos mayores, personas con discapacidad y familias vulnerables de Bello, Antioquia: citas médicas, trámites y una red humana. Conoce el Plan Padrino.",
      },
      { property: "og:title", content: "Fundación FullDías | Llen@ de Días" },
      {
        property: "og:description",
        content:
          "Ninguna persona debería sentirse sola frente a sus dificultades. Llenamos los días de acompañamiento, cuidado y esperanza.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: 'Fundación Llen@ de Días "FullDías"',
          description:
            "Promover, difundir y apoyar la atención básica de la población más vulnerable del Municipio de Bello, Antioquia.",
          areaServed: "Bello, Antioquia, Colombia",
        }),
      },
    ],
  }),
});

const valores = [
  {
    nombre: "Amor",
    texto: "Consiste en amar al otro como a mí mismo.",
  },
  {
    nombre: "Honestidad",
    texto: "Integridad en el servicio que muestra respeto hacia los demás.",
  },
  {
    nombre: "Lealtad",
    texto: "Respeto y fidelidad hacia las personas beneficiarias de la fundación.",
  },
  {
    nombre: "Responsabilidad",
    texto:
      "Cumplimiento con las tareas asignadas que busquen satisfacer a la población vulnerable.",
  },
];

const acompanamos = [
  {
    titulo: "Acompañamiento médico",
    texto:
      "Vamos con la persona a su cita, esperamos con ella y ayudamos a entender las indicaciones del médico.",
  },
  {
    titulo: "Apoyo en trámites",
    texto:
      "Diligencias, autorizaciones, filas y papeleo que muchas veces se vuelven una barrera imposible.",
  },
  {
    titulo: "Presencia y escucha",
    texto:
      "Visitas y compañía en el hogar para quienes pasan la mayor parte del día en soledad.",
  },
  {
    titulo: "Bienestar integral",
    texto:
      "Apoyo en las áreas psicosocial, física y espiritual, junto a la familia y la comunidad.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Fundación FullDías, Llen@ de Días"
              width={583}
              height={410}
              className="h-11 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#problematica" className="hover:text-primary">
              Problemática
            </a>
            <a href="#acompanamos" className="hover:text-primary">
              Qué hacemos
            </a>
            <a href="#galeria" className="hover:text-primary">
              Galería
            </a>
            <a href="#padrino" className="hover:text-primary">
              Plan Padrino
            </a>
            <a href="#fundacion" className="hover:text-primary">
              La fundación
            </a>
          </nav>
          <a href="#padrino" className="btn-base btn-primary !px-5 !py-2.5 !text-sm">
            Ser padrino
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="eyebrow">Bello · Antioquia</p>
              <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                Queremos llenar sus días de acompañamiento, cuidado y esperanza.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Somos la Fundación Llen@ de Días “FullDías”. Acompañamos a personas adultas
                mayores, personas con discapacidad y familias en situación de vulnerabilidad
                cuando su familia no puede estar presente.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#padrino" className="btn-base btn-primary">
                  Quiero ser padrino
                </a>
                <a href="#acompanamos" className="btn-base btn-outline">
                  Conocer los programas
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-sand" aria-hidden="true" />
              <img
                src={heroAsset.url}
                alt="Voluntaria de la Fundación FullDías entregando un mercado a una mujer adulta mayor en su casa"
                className="aspect-[4/5] h-full w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
            </div>
          </div>
        </section>

        {/* Problemática */}
        <section id="problematica" className="bg-secondary/60 section-pad">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">La problemática</p>
            <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">
              Nadie debería enfrentar solo un día difícil.
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="space-y-5 text-lg leading-relaxed text-secondary-foreground">
                <p>
                  Hemos identificado que muchas personas adultas mayores, personas con
                  discapacidad y familias en situación de vulnerabilidad enfrentan dificultades
                  para acceder a servicios médicos, realizar trámites y contar con el
                  acompañamiento que necesitan en su día a día.
                </p>
                <p>
                  En muchos casos, aunque cuentan con un familiar, este debe trabajar durante gran
                  parte del día para sostener su hogar, pagar el arriendo y cubrir sus necesidades
                  básicas. Así, no siempre puede acompañarlos a una cita médica, ayudarlos con un
                  trámite o estar presente cuando más lo necesitan.
                </p>
                <p className="font-display text-2xl leading-snug text-primary">
                  Ante esta realidad nace la labor de FullDías: brindar acompañamiento, apoyo y una
                  red humana que mejore la calidad de vida de quienes atraviesan estas situaciones.
                </p>
              </div>
              <figure className="self-start">
                <img
                  src={hospitalAsset.url}
                  alt="Voluntarias de FullDías acompañando a una mujer adulta mayor hospitalizada"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
                />
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  Creemos que ninguna persona debería sentirse sola frente a sus dificultades.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section id="acompanamos" className="section-pad">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Nuestros programas</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Cómo acompañamos</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {acompanamos.map((item, i) => (
                <article key={item.titulo} className="surface-card p-7">
                  <span className="font-display text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl">{item.titulo}</h3>
                  <p className="mt-2 text-muted-foreground">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        <section id="galeria" className="bg-secondary/60 section-pad">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">Nuestra labor</p>
            <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl">
              Días acompañados en Bello, Antioquia.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-secondary-foreground">
              Momentos reales de nuestro trabajo: citas médicas, trámites, visitas al hogar,
              encuentros y celebraciones junto a los beneficiarios de la fundación.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galeria.map((foto) => (
                <figure key={foto.src} className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]">
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Plan padrino */}
        <section id="padrino" className="bg-olive text-olive-foreground section-pad">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-3xl">
              <p className="eyebrow !text-accent">Plan Padrino</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Acompaña a un beneficiario en su proceso de superación.
              </h2>
              <p className="mt-6 text-lg opacity-90">
                Si te sientes identificado con el proyecto y deseas ayudar a uno de nuestros
                beneficiarios a través de alguno de nuestros programas, puedes notificarlo para
                convertirte en su padrino y apoyarlo en la superación de sus distintas dificultades.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  titulo: "Padrino de acompañamiento",
                  texto:
                    "Regalas tu tiempo: acompañas a un beneficiario a sus citas médicas, trámites o visitas en el hogar.",
                },
                {
                  titulo: "Padrino de bienestar",
                  texto:
                    "Apoyas con un aporte mensual destinado a mercados, medicamentos, transporte o ayudas técnicas.",
                },
                {
                  titulo: "Padrino aliado",
                  texto:
                    "Empresas, profesionales de la salud o comunidades que aportan servicios, insumos o voluntariado.",
                },
              ].map((op) => (
                <article
                  key={op.titulo}
                  className="rounded-2xl border border-olive-foreground/20 bg-olive-foreground/5 p-7"
                >
                  <h3 className="text-xl">{op.titulo}</h3>
                  <p className="mt-3 opacity-85">{op.texto}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
              <div className="surface-card bg-card p-7 text-card-foreground">
                <h3 className="text-xl">Cómo funciona</h3>
                <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">1. Nos escribes.</strong> Cuentas cómo
                    quieres apoyar: tiempo, acompañamiento o aporte.
                  </li>
                  <li>
                    <strong className="text-foreground">2. Te presentamos un caso.</strong> Conoces
                    la historia y la necesidad concreta de un beneficiario del programa que elijas.
                  </li>
                  <li>
                    <strong className="text-foreground">3. Acompañas su proceso.</strong> Recibes
                    reportes con fotos y avances de la persona que apadrinas.
                  </li>
                  <li>
                    <strong className="text-foreground">4. Puedes visitarlo.</strong> Te invitamos a
                    los encuentros y celebraciones de la fundación en Bello.
                  </li>
                </ol>
                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href="https://wa.me/573104997504?text=Hola%2C%20quiero%20ser%20padrino%20de%20FullD%C3%ADas.%20Mi%20nombre%20es%3A%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-primary w-full"
                  >
                    Quiero ser padrino por WhatsApp
                  </a>
                  <a
                    href="mailto:fundacionllenodedias@gmail.com?subject=Quiero%20conocer%20un%20caso%20de%20FullD%C3%ADas"
                    className="btn-base btn-outline w-full"
                  >
                    Primero quiero conocer un caso
                  </a>
                </div>
                <div className="mt-5 space-y-1 text-sm text-muted-foreground">
                  <p>
                    WhatsApp:{" "}
                    <a className="text-foreground underline" href="https://wa.me/573104997504">
                      310 499 7504
                    </a>
                  </p>
                  <p>
                    Correo:{" "}
                    <a
                      className="text-foreground underline"
                      href="mailto:fundacionllenodedias@gmail.com"
                    >
                      fundacionllenodedias@gmail.com
                    </a>
                  </p>
                  <p>
                    Aportes por <strong className="text-foreground">Nequi: 310 499 7504</strong>
                  </p>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Te respondemos con la información del beneficiario y el detalle de en qué se usa
                  cada aporte.
                </p>
              </div>

              <div className="space-y-5">
                <figure className="overflow-hidden rounded-2xl">
                  <img
                    src={heroAsset.url}
                    alt="Voluntaria de FullDías entregando un mercado a una beneficiaria en su casa"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
                <blockquote className="rounded-2xl border border-olive-foreground/20 p-6 font-display text-xl leading-snug">
                  “Cada padrino se convierte en la familia que puede estar presente el día de la
                  cita, del trámite o del cumpleaños.”
                </blockquote>
                <ul className="grid gap-3 text-sm opacity-90 sm:grid-cols-2">
                  <li className="rounded-xl bg-olive-foreground/5 px-4 py-3">
                    Sin intermediarios: el apoyo llega directo al beneficiario.
                  </li>
                  <li className="rounded-xl bg-olive-foreground/5 px-4 py-3">
                    Puedes apadrinar por un mes, un proceso o de forma continua.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* La fundación */}
        <section id="fundacion" className="section-pad">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow">La fundación</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Quiénes somos</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="surface-card p-7">
                <h3 className="text-lg">Objeto social</h3>
                <p className="mt-3 text-muted-foreground">
                  Promover, difundir y apoyar la atención básica de la población más vulnerable del
                  Municipio de Bello, Antioquia, mediante espacios y programas que contribuyan al
                  desarrollo de una vida digna en su entorno social y familiar.
                </p>
              </article>
              <article className="surface-card p-7">
                <h3 className="text-lg">Misión</h3>
                <p className="mt-3 text-muted-foreground">
                  Somos la Fundación Llen@ de Días “FullDías”, que se interesa por el bienestar de
                  la población en situación de vulnerabilidad en las áreas psicosocial, física y
                  espiritual.
                </p>
              </article>
              <article className="surface-card p-7">
                <h3 className="text-lg">Visión</h3>
                <p className="mt-3 text-muted-foreground">
                  Para el año 2027 queremos haber alcanzado en el municipio de Bello la mayor
                  cantidad de habitantes en situación de vulnerabilidad, integrando familia,
                  sociedad y entes gubernamentales, quienes en la medida de sus capacidades apoyarán
                  el desarrollo del objeto de la fundación.
                </p>
              </article>
            </div>

            <div className="mt-14">
              <h3 className="text-2xl">Valores corporativos</h3>
              <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {valores.map((v) => (
                  <div key={v.nombre} className="border-l-2 border-accent pl-5">
                    <dt className="font-display text-xl">{v.nombre}</dt>
                    <dd className="mt-1 text-muted-foreground">{v.texto}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-sand section-pad">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl">
              En FullDías queremos llenar sus días de esperanza.
            </h2>
            <p className="mt-5 text-lg text-sand-foreground">
              Puedes ser voluntario, padrino o aliado. Cada día acompañado es un día más digno.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:contacto@fulldias.org?subject=Quiero%20apoyar%20a%20FullD%C3%ADas"
                className="btn-base btn-primary"
              >
                Quiero apoyar
              </a>
              <a href="#acompanamos" className="btn-base btn-outline">
                Ver programas
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Fundación FullDías"
              width={583}
              height={410}
              loading="lazy"
              className="h-12 w-auto"
            />
            <p className="font-display text-base text-foreground">
              Fundación Llen@ de Días “FullDías”
            </p>
          </div>
          <p>Bello, Antioquia · Colombia</p>
        </div>
      </footer>
    </div>
  );
}
