import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LIObrigado from ".";
import * as fbq from '../../lib/fpixel';

function triggerCompleteRegistration() {
    let router = useRouter();
    useEffect(() => fbq.completeRegistration(router.query))
}

export default function LIObrigadoEspecifico(props) {
    triggerCompleteRegistration();

    return (
        <LIObrigado {...props} />
    );
}
