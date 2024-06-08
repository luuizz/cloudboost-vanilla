import { style } from "@vanilla-extract/css";
import { variable } from "@/app/(client)/variables.css";
import { responsiveStyle } from "@/app/(client)/breakpoints";
import ImgMobile from "@/assets/image-mobile.png"

export const styles = {
    heroStyle: style({
        paddingTop: '8rem',
        ...responsiveStyle({
            desktop: {
                paddingTop: '5rem',
            },
            mobile: {
                paddingTop: '7.2rem'

            }
        })
    }),
    heroContent: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: "1px solid rgba(255,255,255,.1)",
        paddingBottom: '9.7rem',
        ...responsiveStyle({
            desktop: {
                paddingBottom: '5rem',

            },
            tablet: {
                flexDirection: "column",
                gap: "4rem",
            }
        })
    }),

    leftHero: style({
        flex: 1,
        maxWidth: '60rem',
        marginRight: '2.4rem',
        ...responsiveStyle({
          desktop: {
            maxWidth: '55rem',
          },
          tablet: {
            maxWidth: '100%',
            textAlign: 'center',
          },
        }),
    }),

    h1: style({
        marginBottom: "1.6rem",
        letterSpacing: "-0.168rem",
        ...responsiveStyle({
            desktop: {
                fontSize: "5rem",
            },
            mobile: {
                fontSize: "4rem",
                letterSpacing: "-0.12rem",
            }
        })
    }),

    spanHero: style({
        color: variable.purple[10],
        textDecoration: 'underline',
        fontFamily: 'var(--font-title)',
        ...responsiveStyle({
            mobile: {
                display: 'block',
            }
        })
    }),

    textHero: style({
        fontSize: "2.2rem",
        color: variable.gray[200],
        maxWidth: "49.1rem",
        marginBottom: "3.2rem",
        ...responsiveStyle({
            desktop: {
                fontSize: "2rem",
            },
            tablet: {
                margin: "0 auto",
                marginBottom: "3rem",
            },

            mobile: {
                fontSize: "1.6rem",
            }
        })
    }),

    formMail: style({
        borderRadius: "10rem",
        border: ".1rem solid rgba(255,255,255,.04)",
        background: "rgba(255,255,255,.04)",
        padding: ".4rem .4rem .4rem 2.4rem",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "52.1rem",
        gap: 16,
        ...responsiveStyle({
            tablet: {
                margin: "0 auto",
                textAlign: "left",
            },
            mobile: {
                justifyContent: "space-between",
            }
        })
    }),

    inputMail: style({
        all: "unset",
        flex: 1,
        fontSize: "1.6rem",
        color: variable.gray[100],
        '::placeholder': {
            color: variable.gray[300],
        },
        ...responsiveStyle({
            mobile: {
                maxWidth: "15rem"
            }
        })
    }),

    btnMail: style({
        padding: "1.2rem 2rem",
        fontSize: "1.6rem",
    }),

    ulGroup: style({
        width: "100%",
        maxWidth: "33.9rem",
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        margin: '4.8rem 0',
        ...responsiveStyle({
            tablet: {
                margin: "4rem auto",
            }
        })
    }),

    review: style({
        display: "flex",
        alignItems: "center",
        gap: 8,
        ...responsiveStyle({
            tablet: {
                justifyContent: "center",
            }
        })
    }),

    numbers: style({
        display: "flex",
        alignItems: "center",
    }),

    span: style({
        fontSize: "1.8rem",
        fontWeight: 600,
        lineHeight: variable.lineHeight.base,
        color: variable.gray[100],
    }),

    strong: style({
        fontWeight: 400,
        color: variable.gray[600],
    }),

    imgHero: style({
        ...responsiveStyle({
            desktop: {
                maxWidth: "53rem",
            },
            mobile: {
                maxWidth: "100%",
                content: `url(${ImgMobile.src})`
            }
        })
    })
}