import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "@/app/(client)/breakpoints";
import { variable } from "@/app/(client)/variables.css";
import boxBackground from "@/assets/bg-cta.svg"

export const styles = {
    sectionMarketing: style({
        paddingTop: '9.6rem',
        paddingBottom: '12.6rem',
        ...responsiveStyle({
            mobile: {
                paddingTop: '4rem',
                paddingBottom: '4rem',
            }
        })
    }),

    box: style({
        width: '100%',
        height: '46rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '1rem',
        ...responsiveStyle({
            tablet: {
                paddingLeft: '2rem',
                paddingRight: '2rem',
            },

            mobile: {
                height: 'auto',
                backgroundSize: 'cover',
                padding: '4rem 1.5rem'
            },
        })
    }),

    h2: style({
        textAlign: 'center',
        fontSize: '5.6rem',
        maxWidth: '78.6rem',
        marginBottom: '0.8rem',
        ...responsiveStyle({
            mobile: {
                fontSize: '2.9rem'
            }
        })
    }),

    p: style({
        textAlign: 'center',
        fontSize: '2rem',
        color: variable.gray[200],
        lineHeight: variable.lineHeight.base,
        maxWidth: '50.1rem',
        marginBottom: '3.2rem',
        ...responsiveStyle({
            mobile: {
                fontSize: '1.8rem',
            }
        })
    }),
}