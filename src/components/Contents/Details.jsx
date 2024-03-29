import React from "react";
import { FiCalendar, FiShare2, FiBookmark } from "react-icons/fi";
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
          alt='Image'
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
              className={detailstyle.detailsAvatarImage}
              src={`https://s3-alpha-sig.figma.com/img/35b3/2335/854ac739a1a54b9219037b25b41868ec?Expires=1637539200&Signature=Oz3SVcR-o82BCEN6DCjkzJ6Mz7~zXAkIJhyPQEEhwxntQxeEA~QbFQnSOqJRmcJAibnBlroJFLbEJz3Llc3yOzV0q7d6st~RJUBBGtVqmS~EsFv414yK543KFbnIqMucAdzyG7jlud4pYPpBuvWMsJnX4ofkmljy47gjUt6wV6zFeMiybHCkVgbOkKyxuHkYZqCWQZrRmOlEcbvPDEjmgPp6YTEETvXcCkm9H9dyJOZxCyNWK8XXARkLWNx5LT67HmohFKsPYJ3CVvnmd4HHmH6AvVuz-Z2k~LT50KlGFW6CTnv~b-oA8sU0-AXK-NllAJynMQ1OycWPIWSnAE5DGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
              alt='Author'
            />
          </div>
          <div className={detailstyle.detailsMainAuthorInfo}>
            <p>Created by</p>
            <p>Pratur Anahata Pratama</p>
            {/* <button className={detailstyle.detailsShareButton}>
              <FiShare2 className={detailstyle.detailsShareIcon} />
              Share
            </button>
            <button className={detailstyle.detailsSaveButton}>
              <FiBookmark className={detailstyle.detailsSaveIcon} />
              Save
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// this down below is mine
// export default function Details() {
//   return (
//     <>
//       <div className={detailstyle.details}>
//         <div className={detailstyle.title}>
//           <div className={detailstyle.top}>
//             <h1>ESL Game: English on Your Feet!</h1>
//             <div className={detailstyle.dateCategory}>
//               <FiCalendar className={detailstyle.icon} />
//               <p>SUN, OCT 24 @ 1:15 AM ICT</p>
//               <button className={detailstyle.busbtn}>Business</button>
//               <img className={detailstyle.image}
//                 src='https://s3-alpha-sig.figma.com/img/2522/c0e4/6dc673b5918bfe793295837ff96b650c?Expires=1637539200&Signature=dtd~fd11Yh1SzdJD7qbNLncWupLdQSE28YIjo4dHe1pl5OWEjbH-OkreL1LYLV5GoBReQSKkp~zGa7ymkB4N8sjPLH~iXc9FwJMxp7gggzDTO3SGIOkiLbSAJZhIBjpU5PeoLtM4-CloJFZr-rzsfBhbL~97mdRsbb0BhTJYVVZHfGbtwtdcmJkl6RudD7Yc8QY1UyEvVzI528gixlH0wjeYaFE2lczq8yPFGOt~P79P-mTCMrTZcrenGDO0JmGDiOi1AX6Fsz4x~LZcoyAhldbuAZnNpMvLmmlPuwee2MG8uG5VANaVXfQNv5sICBr~y0YIA4aeXIv1BsKIiZolaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
//                 alt='{image}'
//               />
//             </div>
//           </div>
//           <div className={detailstyle.content}>
//             <div className={detailstyle.container}>
//               <h1 className={detailstyle.detailsh1}>Details</h1>
//               <br />
//               <p>Welcome to the Parlor! Let's play English on Your Feet!™</p>
//               <br />
//               GET FEEDBACK
//               <br />
//               GAIN CONFIDENCE
//               <br />
//               LAYER UP YOUR ENGLISH!™
//               <br />
//               <br />
//                 Everyone will have a chance to speak to the "audience" and
//                 receive feedback from the audience and our coaches. You don't
//                 need to prepare anything--just prepare to have fun and try!
//               <br />
//               <p>Relax. Layer Up your English!™ </p>
//               <br />
//               <p>We look forward to your participation.</p>
//               <br />
//               <p>PLEASE READ: 5 Important Notes about this Meetup</p>
//               <br />
//               <p>
//                 1) This event is not a lecture or conversation practice. This is
//                 a structured activity in which all attendees are expected to
//                 actively participate.
//               </p>
//               <br />
//               <p>
//                 2) Participation in "English on Your Feet!™ is optimal for
//                 English language learners at the intermediate level and above.
//               </p>
//               <br />
//               <p>
//                 3) Each member-participant is allowed one guest-participant per
//                 meetup as space allows. Guest-participants may attend as guests
//                 a maximum of 2 times then must join to continue.
//               </p>
//               <br />
//               <p>
//                 4) If your plans change, please update your RSVP. Repeated
//                 "no-shows" will be removed.
//               </p>
//               <br />
//               <p>
//                 5) We use Google Meet. A Google or Gmail account is NOT required
//                 to use the link and join our meeting. Before the meetup, please
//                 open the link (given to you when you RSVP) and explore the
//                 following features on the same device that you will use to
//                 attend: mute/unmute, chat box, and the additional options menu.
//                 (See the PHOTO for visual instructions.)
//               </p>
//               <br />
//             </div>
//             <div className={detailstyle.sidepanel}>
//               <div className={detailstyle.avatarpic}>
//                 <img className={detailstyle.avatarside}
//                   src='https://s3-alpha-sig.figma.com/img/35b3/2335/854ac739a1a54b9219037b25b41868ec?Expires=1637539200&Signature=Oz3SVcR-o82BCEN6DCjkzJ6Mz7~zXAkIJhyPQEEhwxntQxeEA~QbFQnSOqJRmcJAibnBlroJFLbEJz3Llc3yOzV0q7d6st~RJUBBGtVqmS~EsFv414yK543KFbnIqMucAdzyG7jlud4pYPpBuvWMsJnX4ofkmljy47gjUt6wV6zFeMiybHCkVgbOkKyxuHkYZqCWQZrRmOlEcbvPDEjmgPp6YTEETvXcCkm9H9dyJOZxCyNWK8XXARkLWNx5LT67HmohFKsPYJ3CVvnmd4HHmH6AvVuz-Z2k~LT50KlGFW6CTnv~b-oA8sU0-AXK-NllAJynMQ1OycWPIWSnAE5DGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
//                   alt=''
//                 />
//               </div>
//               <p>Created by</p>
//               <h2>Pratur Anahata Pratama</h2>
//             </div>
//             <div className={detailstyle.commentsection}>
//               <h1>Comments</h1>
//               <div className={detailstyle.avatarside}>
//                 <img
//                   src='https://s3-alpha-sig.figma.com/img/6989/fa55/0b70f9e3dda2c46d3dbb67885145014e?Expires=1637539200&Signature=Mm9VNezDRtsO37Zg-lLvWn4K3td1WnkryOWxBei29AhDj2x3MgAchhAeGV6ik~-Qp7mWSISij-jcLWmphWBnlmosCFPtHpuZmViBQCp21Y-7pDSlbCPqZBYdz4s2hH8rxapxL2yjbpVbsCcqAfNyH6FzP3lWvG-E9bE2Gdvk-qgLE-DaR-3V3u3cUI2ZAYW4TqwFMW0gwOSyDEKoOgfBI7HA727lqZMSEcUt6HUiAjvkgB2GQd6W83D5YSD9TVRa0atZOv~JEJwGvIk6hWYWqAYrx6WIa1ZmPNEFlysi6Xe4VIX-QldNHVIEGidnall2Z-W3GE50kvrqFDQaps9mOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
//                   alt=''
//                 />
//               </div>
//               <h2>Yoshua Ginting</h2>
//               <p>4 days ago</p>
//               <p>Hi, do you have a youtube channel that I can subscribe?</p>
//               <img
//                 className={detailstyle.avatarside}
//                 src='https://s3-alpha-sig.figma.com/img/0fd8/59ba/f2cc8b48344c3f8585fb7530dd3e3609?Expires=1637539200&Signature=GuDEYjSraivSbmpIn-UJu60JdHtQoIo4VMjLSlwBKDK2EqbaUMpCebGRtBg8tbOB3NfoNDQDv8mlyyHIr-gcO8OOb5jFlIkKI4oGpUcD2ojcFA9Wa7v-qnUhsmtNbl9sVOkpApIigTRwWpZzhUq9yiH13PlfERCN~eRFxMqzJFG07hdJYGTOC4rIJq2xRmuQ1ezUzJkJfFw1Nhk1LPY0zDqVe89FCJr~DoGWTJMVOOtwIMrTIqfMm~Y4Cg3BRiSmPdcRSBsZ5FzPiZBqUV~f4X~cpzPxM5mdDz0NWqhz-jtDZ-VV9PGb86uCNKu89kDe0vn7F-xJjpr1OqMHiXp9Pg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
//                 alt=''
//               />
//               <h2>Agnes Mo</h2>
//               <p>4 hours ago</p>
//               <p>
//                 Hi pratur! I like your event, I already sent you an email about
//                 my upcoming event, could you hosted my event?
//               </p>
//               <div className={detailstyle.avatarside}>
//                 <img
//                   src='https://s3-alpha-sig.figma.com/img/0bd1/4e23/71a5ccbc3d1830e042fb195a85046580?Expires=1637539200&Signature=P0kUBrf~ZyWBUyyCsEX65VzuBsve8Ua4jRbeCATTKYi3fc1TXzgzrgxwyXmqF74tQhmvc1EOBFaER8zQl8hXMWBgy0HaIWl-AvAHEddtxhdSVbu7Nyn~d2xJwqgws7-b-4r4VekhC0Cjd5gNnJWaLW~2I5HFcsKbgYl1wBg9qQnAkZr8SceJI3dm5nJ44nggwQ2t9eNLDNAAlB1WRryQirh3jFdQ8JQXo4beuPxR15-qjIuDHs5b0gNIQBpkGjX2Bh040OKA-la4LarEU0p7NNWij8tlzDiDBV9qfsDE3Aa-mTW1Yu4oCHg8E8gCOVQoosTMRgetDqiYPUINapmr2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
//                   alt=''
//                 />
//               </div>
//               <h2>Bambang Prakoso</h2>
//               <p>20 Minutes ago</p>
//               <p>Good Event!</p>
//               <div className={detailstyle.avatarside}>
//                 <img
//                   src='https://s3-alpha-sig.figma.com/img/2a84/2041/24f7143e149b588ffaa3f84662432c78?Expires=1637539200&Signature=GUV1g~OhHmIZY6fTIwGNCvkZtdl1WpjM-wrcnLtEGs22i9803JXA~9pTsKk9frVlJnGMY6mlzM~bkdmZP-dEJ6out3ktrx3MG2uyJO-ZAjvSZbtAWxQKaXPj4UUoJtJjJm-PXO4Zo7FlGGEEezcM~Pn3tY5IQclY~cejrciFlYTUzRjCQ4OFTxION9HRLhbEf9J-ZJAlaqHLuus60I2ex-Zx5BYcvGd48Sejqj~kJs2B35nQ8lVtqqY2vSgQbEIymT2E7Er-C~ORcx9qp44ZycLwF0f6TML8IyOV7cGg4SLqBjNIsMbZrQNhZ6JQot0jyZLEjdMmEXNU~egc~lJH3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
//                   alt=''
//                 />
//               </div>
//               <h2>Fandy Araya</h2>
//               <p>20 Minutes ago</p>
//               <p>Bravo!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
