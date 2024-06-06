import { style } from "@vanilla-extract/css";
import { variable } from "@/app/variables.css";
import { responsiveStyle } from "@/app/breakpoints";

export const styles = {
    sectionRecursos: style({
        paddingTop: "11.1rem",
        ...responsiveStyle({
            desktop: {
                paddingTop: "5rem",
            },
            mobile: {
                paddingTop: "4rem",
            }
        })
    }),

    topStyles: style({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "8rem",
        ...responsiveStyle({
            tablet: {
                flexDirection: "column",
                textAlign: "center",
                gap: "3rem",
                marginBottom: '5rem',
            },
            mobile: {
                marginBottom: "3rem",
            }
        })
    }),

    h3Top: style({
        maxWidth: '66.1rem',
        letterSpacing: '-0.12rem',
        ...responsiveStyle({
            mobile: {
                fontSize: '2.8rem',
            }
        })
    }),

    textTop: style({
        display: 'inline-block',
        color: variable.gray[200],
        fontSize: '1.6rem',
        textAlign: 'center',
    }),

    all: style({
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingBottom: '11.1rem',
        borderBottom: '1px solid rgba(255,255,255,.1)',
        ...responsiveStyle({
            desktop: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '3rem',
            },
            tablet: {
                paddingBottom: '5rem',
            },
            mobile: {
                gridTemplateColumns: '1fr',
                gap: '6.4rem',
            },
        })
    }),

    cardRecurso: style({
        maxWidth: '26.5rem',
        width: '100%',
        ...responsiveStyle({
            desktop: {
                maxWidth: '100%',
            }
        })
    }),

    icon: style({
        borderRadius: '0.4rem',
        border: '.1rem solid rgba(255,255,255,.03)',
        background: 'rgba(255,255,255,.03)',
        width: '4.8rem',
        height: '4.8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.6rem',
        ...responsiveStyle({
            tablet: {
                margin: '0 auto',
                marginBottom: '2rem'
            }
        })
    }),

    texts: style({
        ...responsiveStyle({
            tablet: {
                textAlign: 'center',
            }
        })
    }),

    h6: style({
        color: variable.gray[100],
        fontFamily: 'var(--font-texts)',
        fontWeight: 700,
        fontSize: '1.8rem',
        lineHeight: variable.lineHeight.short,
        marginBottom: '1.6rem',
    }),

    textCard: style({
        color: variable.gray[600],
        fontSize: '1.6rem',
        lineHeight: variable.lineHeight.base,
    })
}