import { IHero } from "@/types/hero";
import { get, post, remove } from "./fetchServices";
import createEntityService from "@/HOFs/servicesHOF";
import { IFigures } from "@/types/figures";
import { IFeatures } from "@/types/features";
import { IService } from "@/types/service";
import { IFaq } from "@/types/faq";
import { IContactInfo } from "@/types/contactInfo";
import { ITeamMember } from "@/types/teamMember";
import { IWork } from "@/types/work";
import { IUserCredentials } from "@/types/auth";
import { ISendMessage } from "@/types/contact";
import { IReview } from "@/types/review";
import { IPackage } from "@/types/package";
import { IFounder } from "@/types/founder";
import { BASE_URL } from "@/utils/server";

//  Heroes --------------------------------------------------!

export const getHeroes = async () => {
  return await get(`${BASE_URL}/api/heroes`);
};

export const getHero = async (pageId: string) => {
  return await get(`${BASE_URL}/api/heroes/${pageId}`);
};

export const addUpdateHero = async (data: IHero, token: string) => {
  try {
    return await post(`${BASE_URL}/api/heroes`, data, token);
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Figures --------------------------------------------------!

const figruesService = createEntityService<IFigures>("figures");

export async function getFigures() {
  return await figruesService.get();
}

export async function createUpdateFigures(data: IFigures, token: string) {
  return await figruesService.post(data, token);
}

//  Features --------------------------------------------------!

const featuresService = createEntityService<IFeatures>("features");

export async function getFeatures() {
  return await featuresService.get();
}

export async function createUpdateFeatures(data: IFeatures, token: string) {
  return await featuresService.post(data, token);
}

//  Services --------------------------------------------------!

export const getServicesList = async () => {
  return await get(`${BASE_URL}/api/services/list`);
};

export const getServicesPaginated = async (
  currentPage: number,
  limit: number
) => {
  return await get(
    `${BASE_URL}/api/services?page=${currentPage}&limit=${limit}`
  );
};

export const getService = async (id: string) => {
  return await get(`${BASE_URL}/api/services/${id}`);
};

export const addService = async (data: IService, token: string) => {
  return await post(`${BASE_URL}/api/services/`, data, token);
};

export const updateService = async (data: IService, token: string) => {
  return await post(`${BASE_URL}/api/services/${data._id}`, data, token);
};

export const deleteService = async (data: IService, token: string) => {
  return await remove(`${BASE_URL}/api/services/${data._id}`, {}, token);
};

//  Packages --------------------------------------------------!

export const getPackages = async () => {
  return await get(`${BASE_URL}/api/packages`);
};

export const getPackagesPaginated = async (
  currentPage: number,
  limit: number
) => {
  return await get(
    `${BASE_URL}/api/packages/paginated?page=${currentPage}&limit=${limit}`
  );
};

export const getPackage = async (id: string) => {
  return await get(`${BASE_URL}/api/packages/${id}`);
};

export const addPackage = async (data: IPackage, token: string) => {
  return await post(`${BASE_URL}/api/packages`, data, token);
};

export const updatePackage = async (data: IPackage, token: string) => {
  return await post(`${BASE_URL}/api/packages/${data._id}`, data, token);
};

export const deletePackage = async (data: IPackage, token: string) => {
  return await remove(`${BASE_URL}/api/packages/${data._id}`, {}, token);
};

//  FAQs --------------------------------------------------!

const faqService = createEntityService<IFaq>("faqs");

export async function getFaqsPaginated(currentPage: number, limit: number) {
  return await faqService.getPaginated(`?page=${currentPage}&limit=${limit}`);
}

export const getFaq = async (id: string) => {
  return await faqService.get(`/${id}`);
};

export async function addFaq(data: IFaq, token: string) {
  return await faqService.post(data, token);
}

export async function updateFaq(data: IFaq, token: string) {
  if (!data._id) return;
  return await faqService.update(data._id, data, token);
}

export async function deleteFaq(data: IFaq, token: string) {
  if (!data._id) return;
  return await faqService.remove(data._id, data, token);
}

//  Contact Info --------------------------------------------------!

const contactInfoService = createEntityService<IContactInfo>("contactInfos");

export async function getContactInfo() {
  return await contactInfoService.get();
}

export async function createUpdateContactInfo(
  data: IContactInfo,
  token: string
) {
  return await contactInfoService.post(data, token);
}

//  Team Members --------------------------------------------------!

const teamMemberService = createEntityService<ITeamMember>("teamMembers");

export const getAllTeamMembers = async () => {
  return await teamMemberService.getPaginated();
};

export const getTeamMembersPaginated = async (
  currentPage: number,
  limit: number
) => {
  return await teamMemberService.getPaginated(
    `/paginated?page=${currentPage}&limit=${limit}`
  );
};

export const getTeamMember = async (id: string) => {
  return await teamMemberService.get(`/${id}`);
};

export const addTeamMember = async (data: ITeamMember, token: string) => {
  return await teamMemberService.post(data, token);
};

export const updateTeamMember = async (data: ITeamMember, token: string) => {
  if (!data._id) return;
  return await teamMemberService.update(data._id, data, token);
};

export const deleteTeamMember = async (data: ITeamMember, token: string) => {
  if (!data._id) return;
  return await teamMemberService.remove(data._id, data, token);
};

//  Founders --------------------------------------------------!

const founderService = createEntityService<IFounder>("founders");

export const getAllFounders = async () => {
  return await founderService.getPaginated();
};

export const getFoundersPaginated = async (
  currentPage: number,
  limit: number
) => {
  return await founderService.getPaginated(
    `/paginated?page=${currentPage}&limit=${limit}`
  );
};

export const getFounder = async (id: string) => {
  return await founderService.get(`/${id}`);
};

export const addFounder = async (data: IFounder, token: string) => {
  return await founderService.post(data, token);
};

export const updateFounder = async (data: IFounder, token: string) => {
  if (!data._id) return;
  return await founderService.update(data._id, data, token);
};

export const deleteFounder = async (data: IFounder, token: string) => {
  if (!data._id) return;
  return await founderService.remove(data._id, data, token);
};

//  Works --------------------------------------------------!

export const getWorksPaginated = async (currentPage: number, limit: number) => {
  return await get(`${BASE_URL}/api/works?page=${currentPage}&limit=${limit}`);
};

export const getWorksForGalleryPaginated = async (
  currentPage: number,
  limit: number
) => {
  return await get(
    `${BASE_URL}/api/works/gallery?page=${currentPage}&limit=${limit}`
  );
};

export const getWork = async (id: string) => {
  if (!id || id === "add") return;
  return await get(`${BASE_URL}/api/works/${id}`);
};

export const addWork = async (data: IWork, token: string) => {
  try {
    return await post(`${BASE_URL}/api/works`, data, token);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const updateWork = async (data: IWork, token: string) => {
  try {
    return await post(`${BASE_URL}/api/works/${data._id}`, data, token);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteWork = async (data: IWork, token: string) => {
  try {
    return await remove(`${BASE_URL}/api/works/${data._id}`, data, token);
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Auth --------------------------------------------------!

export const signUp = async (data: IUserCredentials) => {
  try {
    return await post(`${BASE_URL}/api/signup`, data);
  } catch (error) {
    console.log("Error: ", error);
  }
};

//  Contact --------------------------------------------------!

export async function sendContactForm(data: ISendMessage) {
  return await post(`${BASE_URL}/api/contact`, data);
}

//  Reviews --------------------------------------------------!

const reviewService = createEntityService<IReview>("reviews");

export async function getActiveReviewsPaginated(
  currentPage: number,
  limit: number
) {
  return await reviewService.get(`/active?page=${currentPage}&limit=${limit}`);
}

export async function getReviewsPaginated(currentPage: number, limit: number) {
  return await reviewService.get(`?page=${currentPage}&limit=${limit}`);
}

export async function addReview(data: IReview, token: string) {
  return await reviewService.post(data, token, true);
}

export async function updateReview(data: IReview, token: string) {
  if (!data._id) return;
  return await reviewService.update(data._id, data, token);
}

export async function deleteReview(data: IReview, token: string) {
  console.log("data", data);
  if (!data._id) return;
  return await reviewService.remove(data._id, data, token);
}
