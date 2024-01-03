import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [user, photo] = await Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return [{ ...user, ...photo }];
}
