import Papr, { schema, types } from "papr";

export const papr = new Papr();

export const meetupSchema = schema({
  location: types.string({ required: true }),
  id: types.number({ required: true }),
  date: types.date(),
  description: types.string({ required: true }),
  language: types.string({ required: true }),
  city: types.string({ required: true }),
});
export const Meetup = papr.model("meetups", meetupSchema);

export const registeredSchema = schema({
  _id: types.objectId({ required: true }),
  name: types.string({ required: true }),
  mail: types.string(),
  phone: types.string(),
  meetingId: types.string({ required: true }),
});
export const Registered = papr.model("registers", registeredSchema);

export const commentSchema = schema({
  _id: types.objectId({ required: true }),
  date: types.date({ required: true }),
  name: types.string({ required: true }),
  comment: types.string({ required: true }),
  meetupId: types.string({ required: true }),
});
export const Comment = papr.model("newcomments", commentSchema);

export type MeetupDocument = typeof meetupSchema[0];
export type CommentDocument = typeof commentSchema[0];
export type RegisteredDocument = typeof registeredSchema[0];
