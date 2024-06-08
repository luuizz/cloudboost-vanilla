import { CogIcon, HomeIcon, PinIcon } from "@sanity/icons"

export const structure =  (S) =>
    S.list().id('root').title('Content').items([
        S.documentTypeListItem('settings').title('Configurações').icon(CogIcon),
        S.documentTypeListItem('home').title('Home').icon(HomeIcon),
    ]
);