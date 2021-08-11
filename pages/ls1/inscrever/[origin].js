import LS1Inscrever from ".";

export default function LS1InscreverEspecifico(props) {
    return (
        <LS1Inscrever {...props} />
    );
}

export async function getStaticProps(context) {
    const origin = context.params.origin
    return { props: { origin }, revalidate: 1 };
}

export async function getStaticPaths() {
    const paths = [
        { params: { origin: 'instagram' } },
        { params: { origin: 'faceads' } },
        { params: { origin: 'googleads' } },
        { params: { origin: 'telegram' } },
        { params: { origin: 'email' } }
    ];

    return {
        paths,
        fallback: true,
    };
}
