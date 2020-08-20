import client from './client';

export const addNewUser = async (newUser) => {
  try {
    return await client.db('throwaway').collection('users').insertOne(newUser);
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteUser = async ({ userPhone }) => {
  try {
    return await client.db('throwaway').collection('users').findOneAndDelete({ fone: userPhone });
  } catch (err) {
    throw new Error(err);
  }
};

// export const getUser = async () => {
//   try {
//     return await client.db('throwaway').collection('users').findOne();
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const getAllUsers = async () => {
  try {
    return await client.db('throwaway').collection('users').find().toArray();
  } catch (err) {
    throw new Error(err);
  }
};

export const updateUser = async (user) => {
  try {
    return await client.db('throwaway').collection('users').findOneAndUpdate();
  } catch (err) {
    throw new Error(err);
  }
};
