"use server";

export async function shareMeal(fromData) {
  const meal = {
    title: fromData.get("title"),
    summary: fromData.get("summary"),
    instructions: fromData.get("instructions"),
    image: fromData.get("image"),
    creator: fromData.get("name"),
    creator_email: fromData.get("email"),
  };

  console.log(meal);
}
