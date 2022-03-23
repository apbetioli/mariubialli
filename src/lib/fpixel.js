const getCookie = (id) => {
  const v = document.cookie
    .split(";")
    .filter((c) => c.includes(`_${id}=`))
    .map((c) => c.split(`_${id}=`)[1]);
  return (v.length && v[0]) || null;
}

export const track = (eventName, options = {}) => {

  if (!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) return;
  if (!window) return;

  const eventID = "M" + Math.random();
  const now = new Date().getTime();
  const current_timestamp = Math.floor(now / 1000);

  let fbp = getCookie("fbp");
  let fbc = getCookie("fbc");

  if (!fbc && window.location.search.includes("fbclid=")) {
    fbc = "fb.1." + +now + "." + window.location.search.split("fbclid=")[1];
  }

  const opt = {
    ...options,
    event_time: current_timestamp,
    event_id: eventID
  };

  window.fbq("track", eventName, opt, { eventID });

  fetch("/api/fbevent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_id: eventID,
      event_name: eventName,
      options,
      event_time: current_timestamp,
      fbp: fbp,
      fbclid: fbc,
      user_agent: navigator.userAgent,
      url: window.location.origin + window.location.pathname,
    }),
  }).then(res => {
    console.log(res);
  })
    .catch((error) => {
      console.error(error);
    });
};

export const pageview = () => {
  track("PageView");
};

export const completeRegistration = (query) => {
  if (!query.em) {
    console.warn("No email passed to completeRegistration")
    return;
  }

  const params = {
    em: query.em,
  };

  if (query.ph) params.ph = query.ph;
  if (query.fn) params.fn = query.fn;

  track("CompleteRegistration", params);
};
