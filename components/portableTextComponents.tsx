export const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return <img src={value.asset.url} />
    },
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
    break: ({ value }: any) => {
      const { style } = value
      if (style === 'lineBreak') {
        return <hr className="mx-8 my-4" />
      }
      if (style === 'spaceBreak') {
        return (
          <>
            <br />
          </>
        )
      } else {
        return <br />
      }
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}
