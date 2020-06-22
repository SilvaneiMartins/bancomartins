/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import { useEffect } from 'react';

export const useOnClickOutside = (
    ref: React.RefObject<HTMLDivElement>,
    handler: any,
): void => {
    useEffect(() => {
        const listener = (event: Event): void => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(!!event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};
