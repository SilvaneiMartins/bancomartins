/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import { useState, useEffect } from 'react';
interface Props {
    width: number;
    height: number;
}

function getWindowDimensions(): Props {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export default function useWindowDimensions(): Props {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    );

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
