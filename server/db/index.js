import client from './client';

// GOOD
export const addNewUser = async (newUser) => {
  try {
    return await client.db('throwaway').collection('users').insertOne(newUser);
  } catch (err) {
    throw new Error(err);
  }
};

// GOOD
export const deleteUser = async ({ userPhone }) => {
  try {
    // Created object and destructured on receipt - then set it's value as the
    // value of the property we're trying to find a match for. 'fone' in this case.
    return await client.db('throwaway').collection('users').findOneAndDelete({ fone: userPhone });
  } catch (err) {
    throw new Error(err);
  }
};

// GOOD
export const getUser = async (userPhone) => {
  try {
    return await client.db('throwaway').collection('users').findOne({ fone: userPhone });
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllUsers = async () => {
  try {
    return await client.db('throwaway').collection('users').find().toArray();
  } catch (err) {
    throw new Error(err);
  }
};

// export const updateUser = async ({
//   emailToUpdate, messageToUpdate, nameToUpdate, phoneToUpdate,
// }) => {
//   try {
//     return await client
//       .db('throwaway')
//       .collection('users')
//       .findOneAndUpdate(
//         { fone: phoneToUpdate },
//         { $set { name: nameToUpdate, email: emailToUpdate, msg: messageToUpdate } },
//       );
//   } catch (err) {
//   throw new Error(err);
// }
// };
