import LIObrigado from ".";
import LS1Obrigado from ".";

export default function LIObrigadoEspecifico(props) {
    return (
        <LIObrigado {...props} />
    );
}

export async function getStaticProps(context) {
    const origin = context.params.origin
    return { props: { origin }, revalidate: 1 };
}

export async function getStaticPaths() {
    const paths = [
        { params: { origin: 'og' } },
        { params: { origin: 'fb' } },
        { params: { origin: 'gg' } },
        { params: { origin: 'tg' } },
        { params: { origin: 'em' } }
    ];

    return {
        paths,
        fallback: true,
    };
}
