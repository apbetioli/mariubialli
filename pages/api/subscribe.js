const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const translate = {
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
    'CONFIRMED': 'aaumQpa',
    'JRP_ESPERA': 'qLu3RG7',
    'Facebook_Stories': 'lEuepvR',
    'Facebook_Feed': 'LnuKBr1',
    'Facebook_Right_Column': 'GLu60Je',
    'Facebook_Desktop_Feed': 'Pwuo5bk',
    'Facebook_Instant_Articles': 'y7u0OM9',
    'Instagram_Stories': '2juLxBL',
    'Instagram_Feed': 'VKuxME5',
    'Instagram_Reels': 'bMuyKPe',
    'Instagram_Explore': 'rGu2qBv',
    'BF_LI_JAN22': '7auRE6L',
    'BF_LI_JAN22_OG': 'wou01p3',
    'BF_LI_JAN22_FB': 'X1unMy4',
    'BF_LI_JAN22_GG': '08uyYJr',
    'BF_LI_JAN22_TG': 'mvulxbx',
    'BF_LI_JAN22_EM': '95urPA9',
    'BF_LI_JAN22_CHECKOUT': 'WBupXPV',
    'Tvfa': 'eYu3xVP',
    'search': '8Mu4zRX',
    'discovery': 'xJuG0PR',
    'display': '4puzGoz',
    'Pesquisa': '8Mu4zRX',
    'pesquisa': '8Mu4zRX',
    'DS_COMBO1_CHECKOUT': 'BEuv9e1',
    'DS_COMBO2_CHECKOUT': 'xJuGkPW',
    'DS_COMBO3_CHECKOUT': '4puzdo5',
    'DS_COMBO4_CHECKOUT': '8Mu41R5',
    'DS_COMBO5_CHECKOUT': 'zwuYE9o',
    'DS_COMBO6_CHECKOUT': 'jru0nxy',
    'CMU_ESPERA': 'kRuOXE8'
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

    if (!tag) {
        console.log('No tag informed. Skip lead.')
        return;
    }

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

        if (lead.source && lead.source !== "" && translate[lead.source])
            subscribe(lead, translate[lead.source])

        if (!result.includes('obrigado'))
            console.error(result)

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
