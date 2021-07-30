const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

module.exports = async (req, res) => {

    const lead = req.body;
    console.log(lead);

    const name = lead.name.split(" ")

    const params = new URLSearchParams();
    params.append('email', lead.email);
    params.append('first_name', name[0]);
    if (name.length > 0)
        params.append('first_name', name[0]);
    if (name.length > 1)
        params.append('last_name', name.slice(1).join(" "));
    if (lead.phone)
        params.append('phone', lead.phone);
    params.append('b_' + lead.tag, '');

    try {
        await fetch('https://handler.klicksend.com.br/subscription/' + lead.tag, { method: 'POST', body: params })
            .then(res => {
                if (res.ok) {
                    return res;
                } else {
                    throw res;
                }
            })
            .then(body => {
                console.log(body.url)
                res.send(body.url)
            })
            .catch(err => { throw err });

    } catch (err) {
        console.error(err)
        res
            .status(400)
            .send(
                "Não foi possível completar o cadastro. Tente novamente em alguns minutos."
            );
    };
};
