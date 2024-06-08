import { globalStyle, style } from "@vanilla-extract/css";
import { variable } from "@/app/(client)/variables.css";
import { responsiveStyle } from "@/app/(client)/breakpoints";



export const styles = {
    header: style({
        height: variable.headerHeight,
        marginTop: '1.6rem',
        position: 'sticky',
        top: 16,
        zIndex: 2025,
    }),

    contentHeader: style({
        borderRadius: '10rem',
        border: '.1rem solid rgba(255,255,255,.08)',
        background: 'rgba(255,255,255,.04)',
        WebkitBackdropFilter: 'blur(0.35rem)',
        backdropFilter: 'blur(0.35rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.8rem .8rem .8rem 2.1rem',
        ...responsiveStyle({
            mobile: {
                padding: '2rem 2.5rem',
            }
        })
    }),

    left: style({
        display: 'flex',
        alignItems: 'center',
        gap: '1.6rem',
        ...responsiveStyle({
            mobile: {
                display: 'none',
            }
        })
    }),

    linkHelp: style({
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    }),

    spanHelp: style({
        fontSize: '1.6rem',
        fontWeight: 500,
        lineHeight: variable.lineHeight.base,
        color: variable.gray['200'], 
        transition: 'color .3s ease',
    }),

    menu: style({
        display: 'none',
        ...responsiveStyle({
            mobile: {
                display: 'block',
            }
        })
    })
}