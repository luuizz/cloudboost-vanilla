import { style } from "@vanilla-extract/css";
import { variable } from "@/app/(client)/variables.css";

export const styles = {
    btnPrimary: style({
        borderRadius: '10rem',
        border: '.1rem solid rgba(255, 255, 255, .16)',
        background: variable.purple['10'],
        display: 'inline-block',
        padding: '1.4rem 2.3rem',
        fontSize: '1.8rem',
        color: variable.gray['100'],
        fontWeight: 500,
        transition: 'background-color .3s ease',
        fontFamily: 'var(--font-texts)',
        ':hover': {
            backgroundColor: variable.purple[20],
        }
    }),
}