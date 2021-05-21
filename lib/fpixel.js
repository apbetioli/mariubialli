

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const track = (eventName, options = {}) => {
    if (!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID)
        return;

    let eventID = "M" + Math.random()
    let now = new Date()
    let current_timestamp = Math.floor(now / 1000);

    let fbp = document.cookie.split(';').filter(c => c.includes('_fbp=')).map(c => c.split('_fbp=')[1]);
    let fbc = document.cookie.split(';').filter(c => c.includes('_fbc=')).map(c => c.split('_fbc=')[1]);
    fbp = (fbp.length && fbp[0]) || null;
    fbc = (fbc.length && fbc[0]) || null;

    if (!fbc && window.location.search.includes('fbclid=')) {
        fbc = 'fb.1.' + (+now) + '.' + window.location.search.split('fbclid=')[1];
    }

    let opt = {
        event_time: current_timestamp,
        ...options
    }

    window.fbq('track', eventName, opt, { eventID })

    fetch('/api/fbevent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event_id: eventID,
            event_name: eventName,
            options,
            event_time: current_timestamp,
            fbp: fbp,
            fbclid: fbc,
            user_agent: navigator.userAgent,
            url: window.location.origin + window.location.pathname,
        })
    }).catch(function (error) {
        console.error('There has been a problem with your fetch operation: ' + error.message);
    });
}

export const pageview = () => {
    track('PageView');
}

export const completeRegistration = (query) => {
    if (!query.em)
        return;

    let params = {
        em: query.em
    };

    if (query.ph) params.ph = query.ph
    if (query.fn) params.fn = query.fn

    track("CompleteRegistration", params)
}
