const BASE_URL = "http://localhost:3000";

//  Heroes --------------------------------------------------!

export const getHeroes = async () => {
  const response = await fetch(`${BASE_URL}/api/heroes`);
  const json = await response.json();
  return json;
};

export const getHero = async (pageId: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId }),
  };
  const response = await fetch(`${BASE_URL}/api/heroes/${pageId}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateHero = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/heroes`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Figures --------------------------------------------------!

export const getFigures = async () => {
  const response = await fetch(`${BASE_URL}/api/figures`);
  const json = await response.json();
  return json;
};

export const getFigure = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/figures/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateFigure = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/figures`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Features --------------------------------------------------!

export const getFeatures = async () => {
  const response = await fetch(`${BASE_URL}/api/features`);
  const json = await response.json();
  return json;
};

export const getFeature = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/features/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateFeature = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/features`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Services --------------------------------------------------!

export const getServices = async () => {
  const response = await fetch(`${BASE_URL}/api/services`);
  const json = await response.json();
  return json;
};

export const getService = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/services/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateService = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/services`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Packages --------------------------------------------------!

export const getPackages = async () => {
  const response = await fetch(`${BASE_URL}/api/packages`);
  const json = await response.json();
  return json;
};

export const getPackage = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/packages/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdatePackage = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/packages`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  FAQs --------------------------------------------------!

export const getFAQs = async () => {
  const response = await fetch(`${BASE_URL}/api/faqs`);
  const json = await response.json();
  return json;
};

export const getFAQ = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/faqs/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateFAQ = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/faqs`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Contact Info --------------------------------------------------!

export const getContactInfos = async () => {
  const response = await fetch(`${BASE_URL}/api/contactInfos`);
  const json = await response.json();
  return json;
};

export const getContactInfo = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/contactInfos/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateContactInfo = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/contactInfos`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Team Members --------------------------------------------------!

export const getTeamMembers = async () => {
  const response = await fetch(`${BASE_URL}/api/teamMembers`);
  const json = await response.json();
  return json;
};

export const getTeamMember = async (id: string) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageId: id }),
  };
  const response = await fetch(`${BASE_URL}/api/teamMembers/${id}`, options);
  const json = await response.json();
  return json;
};

export const addUpdateTeamMember = async (data: any) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${BASE_URL}/api/teamMembers`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error: ", error);
  }
};
