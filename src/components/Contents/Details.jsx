import React from "react";
import { FiCalendar } from "react-icons/fi";
import detailstyle from "./details.module.scss";

export default function Details() {
  return (
    <div className={detailstyle.details}>
      <h1 className={detailstyle.detailsTitle}>
        ESL Game: English on Your Feet!
      </h1>
      <div className={detailstyle.detailsDateCategory}>
        <FiCalendar className={detailstyle.detailsDateCategoryIcon} />
        <p>SUN, OCT 24 @ 1:15 AM ICT</p>
        <button className={detailstyle.detailsDateCategoryChip}>
          Business
        </button>
      </div>
      <div className={detailstyle.detailsPostImageContainer}>
        <img
          src={`https://s3-alpha-sig.figma.com/img/2522/c0e4/6dc673b5918bfe793295837ff96b650c?Expires=1637539200&Signature=dtd~fd11Yh1SzdJD7qbNLncWupLdQSE28YIjo4dHe1pl5OWEjbH-OkreL1LYLV5GoBReQSKkp~zGa7ymkB4N8sjPLH~iXc9FwJMxp7gggzDTO3SGIOkiLbSAJZhIBjpU5PeoLtM4-CloJFZr-rzsfBhbL~97mdRsbb0BhTJYVVZHfGbtwtdcmJkl6RudD7Yc8QY1UyEvVzI528gixlH0wjeYaFE2lczq8yPFGOt~P79P-mTCMrTZcrenGDO0JmGDiOi1AX6Fsz4x~LZcoyAhldbuAZnNpMvLmmlPuwee2MG8uG5VANaVXfQNv5sICBr~y0YIA4aeXIv1BsKIiZolaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
          alt="Image"
          className={detailstyle.detailsPostImage}
        />
      </div>
      <div className={detailstyle.detailsMain}>
        <div className={detailstyle.detailsMainContent}>
          <h2 className={detailstyle.detailsMainContentTitle}>Details</h2>
          <p>
            Welcome to the Parlor! Let's play English on Your Feet!™ <br />
            <br />
            GET FEEDBACK <br />
            GAIN CONFIDENCE <br />
            LAYER UP YOUR ENGLISH!&#8482; <br />
            Everyone will have a chance to speak to the "audience" and receive
            feedback from the audience and our coaches. You don't need to
            prepare anything--just prepare to have fun and try! <br /> <br />
            Relax. Layer Up your English!&#8482; <br /> <br />
            We look forward to your participation. <br /> <br />
            PLEASE READ: 5 Important Notes about this Meetup <br /> <br />
            1&#41; This event is not a lecture or conversation practice. This is
            a structured activity in which all attendees are expected to
            actively participate. <br /> <br />
            2&#41; Participation in "English on Your Feet!&#8482; is optimal for
            English language learners at the intermediate level and above.
            <br /> <br />
            3&#41; Each member-participant is allowed one guest-participant per
            meetup as space allows. Guest-participants may attend as guests a
            maximum of 2 times then must join to continue. <br /> <br />
            4&#41; If your plans change, please update your RSVP. Repeated
            "no-shows" will be removed. <br /> <br />
            5&#41; We use Google Meet. A Google or Gmail account is NOT required
            to use the link and join our meeting. Before the meetup, please open
            the link &#40;given to you when you RSVP&#41; and explore the
            following features on the same device that you will use to attend:
            mute/unmute, chat box, and the additional options menu. &#40;See the
            PHOTO for visual instructions.&#41;
          </p>
        </div>
        <div className={detailstyle.detailsMainAuthor}>
          <div className={detailstyle.detailsMainAuthorAvatar}>
            <img
              src={`https://s3-alpha-sig.figma.com/img/35b3/2335/854ac739a1a54b9219037b25b41868ec?Expires=1637539200&Signature=Oz3SVcR-o82BCEN6DCjkzJ6Mz7~zXAkIJhyPQEEhwxntQxeEA~QbFQnSOqJRmcJAibnBlroJFLbEJz3Llc3yOzV0q7d6st~RJUBBGtVqmS~EsFv414yK543KFbnIqMucAdzyG7jlud4pYPpBuvWMsJnX4ofkmljy47gjUt6wV6zFeMiybHCkVgbOkKyxuHkYZqCWQZrRmOlEcbvPDEjmgPp6YTEETvXcCkm9H9dyJOZxCyNWK8XXARkLWNx5LT67HmohFKsPYJ3CVvnmd4HHmH6AvVuz-Z2k~LT50KlGFW6CTnv~b-oA8sU0-AXK-NllAJynMQ1OycWPIWSnAE5DGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
              alt="Author"
            />
          </div>
          <div className={detailstyle.detailsMainAuthorInfo}>
            <p>Created by</p>
            <p>Pratur Anahata Pratama</p>
          </div>
        </div>
      </div>
    </div>
  );
}
