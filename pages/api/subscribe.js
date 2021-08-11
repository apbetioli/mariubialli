const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const translate = {
    'LS1': 'QXuLwaE',
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
    'email': 'QXuLw19'
}

getParams = (lead) => {
    const params = new URLSearchParams();

    params.append('email', lead.email);

    if (lead.name) {
        const name = lead.name.split(" ")
        params.append('first_name', name[0]);
        if (name.length > 0)
            params.append('first_name', name[0]);
        if (name.length > 1)
            params.append('last_name', name.slice(1).join(" "));
    }

    if (lead.phone)
        params.append('phone', lead.phone);

    return params;
}

subscribe = async (lead, tag) => {

    const params = getParams(lead)
    params.append('b_' + tag, '');

    return await fetch('https://handler.klicksend.com.br/subscription/' + tag, { method: 'POST', body: params })
        .then(res => {
            if (!res.ok) throw res;
            return res.url;
        })
        .catch(err => { throw err });
}

module.exports = async (req, res) => {

    const lead = req.body;
    console.log(lead);

    try {
        await subscribe(lead, translate[lead.tag])
            .then(result => {

                if (lead.source)
                    subscribe(lead, translate[lead.source])

                return result
            })
            .then(result => {
                res.send(result)
            })

    } catch (err) {
        console.error(err)
        res
            .status(400)
            .send(
                "Não foi possível completar o cadastro. Tente novamente em alguns minutos."
            );
    };
};
