import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return results.then((res) => (
    res.map((reso) => ({
      status: reso.status,
      value: reso.status === 'fulfilled' ? reso.value : reso.reason,
    }))
  ));
}
