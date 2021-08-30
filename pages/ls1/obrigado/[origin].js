import LS1Obrigado from ".";

export default function LS1ObrigadoEspecifico(props) {
    return (
        <LS1Obrigado {...props} />
    );
}

export async function getStaticProps(context) {
    const origin = context.params.origin
    return { props: { origin }, revalidate: 1 };
}

export async function getStaticPaths() {
    const paths = [
        { params: { origin: 'ig' } },
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
