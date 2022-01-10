import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LIObrigado from ".";
import * as fbq from '../../lib/fpixel';

function triggerCompleteRegistration() {
    let router = useRouter();

    useEffect(() => {
        if (!router.query.em)
            return;

        let params = {
            em: router.query.em
        };

        if (router.query.ph) params.ph = router.query.ph
        if (router.query.fn) params.fn = router.query.fn

        fbq.track("CompleteRegistration", params)
    })
}

export default function LIObrigadoEspecifico(props) {
    triggerCompleteRegistration();

    return (
        <LIObrigado {...props} />
    );
}
