// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from '@hey-api/client-fetch';
import { client } from '@hey-api/client-fetch';

import type {
  AddPetData,
  AddPetResponse,
  CreateUserData,
  CreateUserResponse,
  CreateUsersWithListInputData,
  CreateUsersWithListInputResponse,
  DeleteOrderData,
  DeletePetData,
  DeleteUserData,
  FindPetsByStatusData,
  FindPetsByStatusResponse,
  FindPetsByTagsData,
  FindPetsByTagsResponse,
  GetInventoryResponse,
  GetOrderByIdData,
  GetOrderByIdResponse,
  GetPetByIdData,
  GetPetByIdResponse,
  GetUserByNameData,
  GetUserByNameResponse,
  LoginUserData,
  LoginUserResponse,
  LogoutUserResponse,
  PlaceOrderData,
  PlaceOrderResponse,
  UpdatePetData,
  UpdatePetResponse,
  UpdatePetWithFormData,
  UpdateUserData,
  UpdateUserResponse,
  UploadFileData,
  UploadFileResponse,
} from './types.gen';

/**
 * Add a new pet to the store
 * Add a new pet to the store
 * @param data The data for the request.
 * @param data.requestBody Create a new pet in the store
 * @returns Pet Successful operation
 * @throws ApiError
 */
export const addPet = (data: AddPetData): CancelablePromise<AddPetResponse> =>
  client.post({
    ...data,
    url: '/pet',
  });

/**
 * Update an existing pet
 * Update an existing pet by Id
 * @param data The data for the request.
 * @param data.requestBody Update an existent pet in the store
 * @returns Pet Successful operation
 * @throws ApiError
 */
export const updatePet = (
  data: UpdatePetData,
): CancelablePromise<UpdatePetResponse> =>
  client.put({
    ...data,
    url: '/pet',
  });

/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 * @param data The data for the request.
 * @param data.status Status values that need to be considered for filter
 * @returns Pet successful operation
 * @throws ApiError
 */
export const findPetsByStatus = (
  data: FindPetsByStatusData = {},
): CancelablePromise<FindPetsByStatusResponse> =>
  client.get({
    ...data,
    url: '/pet/findByStatus',
  });

/**
 * Finds Pets by tags
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @param data The data for the request.
 * @param data.tags Tags to filter by
 * @returns Pet successful operation
 * @throws ApiError
 */
export const findPetsByTags = (
  data: FindPetsByTagsData = {},
): CancelablePromise<FindPetsByTagsResponse> =>
  client.get({
    ...data,
    url: '/pet/findByTags',
  });

/**
 * Find pet by ID
 * Returns a single pet
 * @param data The data for the request.
 * @param data.petId ID of pet to return
 * @returns Pet successful operation
 * @throws ApiError
 */
export const getPetById = (
  data: GetPetByIdData,
): CancelablePromise<GetPetByIdResponse> =>
  client.get({
    ...data,
    url: '/pet/{petId}',
  });

/**
 * Updates a pet in the store with form data
 * @param data The data for the request.
 * @param data.petId ID of pet that needs to be updated
 * @param data.name Name of pet that needs to be updated
 * @param data.status Status of pet that needs to be updated
 * @throws ApiError
 */
export const updatePetWithForm = (
  data: UpdatePetWithFormData,
): CancelablePromise<void> =>
  client.post({
    ...data,
    url: '/pet/{petId}',
  });

/**
 * Deletes a pet
 * @param data The data for the request.
 * @param data.petId Pet id to delete
 * @param data.apiKey
 * @throws ApiError
 */
export const deletePet = (data: DeletePetData): CancelablePromise<void> =>
  client.delete({
    ...data,
    url: '/pet/{petId}',
  });

/**
 * uploads an image
 * @param data The data for the request.
 * @param data.petId ID of pet to update
 * @param data.additionalMetadata Additional Metadata
 * @param data.requestBody
 * @returns ApiResponse successful operation
 * @throws ApiError
 */
export const uploadFile = (
  data: UploadFileData,
): CancelablePromise<UploadFileResponse> =>
  client.post({
    ...data,
    url: '/pet/{petId}/uploadImage',
  });

/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 * @returns number successful operation
 * @throws ApiError
 */
export const getInventory = (): CancelablePromise<GetInventoryResponse> =>
  client.get({
    ...data,
    url: '/store/inventory',
  });

/**
 * Place an order for a pet
 * Place a new order in the store
 * @param data The data for the request.
 * @param data.requestBody
 * @returns Order successful operation
 * @throws ApiError
 */
export const placeOrder = (
  data: PlaceOrderData = {},
): CancelablePromise<PlaceOrderResponse> =>
  client.post({
    ...data,
    url: '/store/order',
  });

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @param data The data for the request.
 * @param data.orderId ID of order that needs to be fetched
 * @returns Order successful operation
 * @throws ApiError
 */
export const getOrderById = (
  data: GetOrderByIdData,
): CancelablePromise<GetOrderByIdResponse> =>
  client.get({
    ...data,
    url: '/store/order/{orderId}',
  });

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @param data The data for the request.
 * @param data.orderId ID of the order that needs to be deleted
 * @throws ApiError
 */
export const deleteOrder = (data: DeleteOrderData): CancelablePromise<void> =>
  client.delete({
    ...data,
    url: '/store/order/{orderId}',
  });

/**
 * Create user
 * This can only be done by the logged in user.
 * @param data The data for the request.
 * @param data.requestBody Created user object
 * @returns User successful operation
 * @throws ApiError
 */
export const createUser = (
  data: CreateUserData = {},
): CancelablePromise<CreateUserResponse> =>
  client.post({
    ...data,
    url: '/user',
  });

/**
 * Creates list of users with given input array
 * Creates list of users with given input array
 * @param data The data for the request.
 * @param data.requestBody
 * @returns User Successful operation
 * @returns unknown successful operation
 * @throws ApiError
 */
export const createUsersWithListInput = (
  data: CreateUsersWithListInputData = {},
): CancelablePromise<CreateUsersWithListInputResponse> =>
  client.post({
    ...data,
    url: '/user/createWithList',
  });

/**
 * Logs user into the system
 * @param data The data for the request.
 * @param data.username The user name for login
 * @param data.password The password for login in clear text
 * @returns string successful operation
 * @throws ApiError
 */
export const loginUser = (
  data: LoginUserData = {},
): CancelablePromise<LoginUserResponse> =>
  client.get({
    ...data,
    url: '/user/login',
  });

/**
 * Logs out current logged in user session
 * @returns unknown successful operation
 * @throws ApiError
 */
export const logoutUser = (): CancelablePromise<LogoutUserResponse> =>
  client.get({
    ...data,
    url: '/user/logout',
  });

/**
 * Get user by user name
 * @param data The data for the request.
 * @param data.username The name that needs to be fetched. Use user1 for testing.
 * @returns User successful operation
 * @throws ApiError
 */
export const getUserByName = (
  data: GetUserByNameData,
): CancelablePromise<GetUserByNameResponse> =>
  client.get({
    ...data,
    url: '/user/{username}',
  });

/**
 * Update user
 * This can only be done by the logged in user.
 * @param data The data for the request.
 * @param data.username name that needs to be updated
 * @param data.requestBody Update an existent user in the store
 * @returns unknown successful operation
 * @throws ApiError
 */
export const updateUser = (
  data: UpdateUserData,
): CancelablePromise<UpdateUserResponse> =>
  client.put({
    ...data,
    url: '/user/{username}',
  });

/**
 * Delete user
 * This can only be done by the logged in user.
 * @param data The data for the request.
 * @param data.username The name that needs to be deleted
 * @throws ApiError
 */
export const deleteUser = (data: DeleteUserData): CancelablePromise<void> =>
  client.delete({
    ...data,
    url: '/user/{username}',
  });
