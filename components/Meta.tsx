import Head from 'next/head'

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}: any) => {
  return (
    <Head>
      {/* <link
        as="style"
        rel="stylesheet preload prefetch"
        href="/fonts.css"
        type="text/css"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/SourceSansPro-Regular.ttf"
        as="font"
        crossOrigin=""
        type="font/woff2"
      /> */}
      <meta name="google" content="notranslate" />
      <meta name="googlebot" content="notranslate" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="manifest" href="/manifest.json" />

      <link rel="manifest" href="/site.webmanifest" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <meta name="theme-color" content="#317EFB" />

      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />

      <meta property="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description}></meta>

      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:image" content={ogImage} />

      <meta property="twitter:card" content={'summary_large_image'} />

      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  )
}
Meta.defaultProps = {
  title: 'Fice Festival',
  keywords:
    'fice, festival, cine, rioplatense, películas, cortos, vertical videos, premios, isla, produccion cinematografica, encuentro, artes audiovisuales, Rio de La Plata, Ensenada, agua, comunidad, rio.',
  description:
    'El Festival Internacional de Cine de Ensenada, es el primer festival destinado al encuentro y la difusión de las artes audiovisuales nacionales e internacionales de la Ciudad de Ensenada. Gestado en la orilla del Río de La Plata, el FICE tiene como elemento central al agua, buscando reunir a la comunidad ensenadense en torno a un rasgo identitario que atraviesa a toda la región. Un río ancho y marrón, dador de una memoria y una historia de resistencias, tránsitos, arribos y exilios; de la humedad, el verde de la selva más austral del mundo, el barro; del metal y las maderas, el astillero, el puerto; del sonido de la fiesta, el carnaval y el baile orillero que se escuchan en cada ola. Una ciudad orilla, una bahía abrigada que contiene a una comunidad ribereña que vive de, entre, por y para el río. El FICE nace del deseo de crear un espacio de encuentro para la región con obras cinematográficas locales e internacionales que movilicen a reflexionar sobre la propia existencia a la vez que exploren nuevas zonas de contacto y permitan construir puentes transplatinos con otras culturas a través del intercambio de obra audiovisual. El FICE busca recuperar como en cada bajada del río, las memorias depositadas en el barro rioplatense para agitar otras imaginaciones poético-políticas posibles en el presente. Porque creemos en la necesidad de contar nuestra historia pero también en la necesidad de movilizar un espacio de goce y disfrute para toda nuestra comunidad, que restituya la experiencia de ir al cine por placer. Porque confiamos en que ir al cine no debe ser un privilegio, sino una posibilidad de y para tod*s.',
  ogTitle: 'Fice Festival',
  ogUrl: 'https://fice.com.ar/',
  ogImage: 'https://fice.com.ar/images/logo.png',
}
export default Meta
