const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const translate = {
    'NEWSLETTER': '1zuVyod',
    'JRPREMIUM-CHECKOUT': 'O7uOx9X',
    'JOIASRARAS-CHECKOUT': 'aaumwbJ',
    'JESUS-CHECKOUT': 'aaumwKA',
    'DOWNLOAD': '8Mu4wW0',
    'youtube': '8Mu4wn',
    'instagram': 'plue2j6',
    'faceads': 'd3uPmlL',
    'facebook': 'kRuOyBd',
    'googleads': 'aaumwRj',
    'telegram': 'GLu6woq',
    'email': 'QXuLw19',
    'AS_LS_#1': 'QXuLwaE',
    'AS_LS_#1_FB': 'zwuYzRl',
    'AS_LS_#1_GG': 'qLu32x3',
    'AS_LS_#1_TG': 'plueb24',
    'AS_LS_#1_EM': 'd3uP4mR',
    'AS_LS_#1_CHECKOUT': 'kRuOwy3',
    'AC_ESPERA_TURMA2': 'eYu3aaa',
    'AC_LI_#1': 'd3uPonL',
    'AC_LI_#1_OG': 'kRuOAEd',
    'AC_LI_#1_FB': 'aaum2jj',
    'AC_LI_#1_GG': 'MouQkK1',
    'AC_LI_#1_TG': '5du204B',
    'AC_LI_#1_EM': 'eYu3JeM',
    'AC_LI_#1_CHECKOUT': 'xJuGBKa',
    'AC_ESPERA_TURMA3': 'jru0O2p',
    'CONFIRMED': 'aaumQpa'
}

getParams = (lead) => {
    const params = new URLSearchParams();

    params.append('email', lead.email);

    if (lead.name && lead.name !== "") {
        const name = lead.name.split(" ")
        params.append('first_name', name[0]);
        if (name.length > 0)
            params.append('first_name', name[0]);
        if (name.length > 1)
            params.append('last_name', name.slice(1).join(" "));
    }

    if (lead.phone && lead.phone !== "")
        params.append('phone', lead.phone);

    return params;
}

subscribe = async (lead, tag) => {

    if (!tag)
        return;

    const params = getParams(lead)
    params.append('b_' + tag, '');

    return await fetch('https://handler.klicksend.com.br/subscription/' + tag, {
        method: 'POST',
        body: params
    }).then(res => {
        if (!res.ok) throw res;
        return res.url;
    }).catch(err => {
        console.error(err.message);
        throw err
    });
}

module.exports = async (req, res) => {

    const lead = req.body;
    console.log(lead);

    try {
        let result = await subscribe(lead, translate[lead.tag])

        if (lead.source && lead.source !== "" && lead.source !== "undefined") {
            await subscribe(lead, translate[lead.source])
        }

        res.send(result)

    } catch (err) {
        console.error(err)
        res
            .status(400)
            .send(
                err
            );
    };
};
