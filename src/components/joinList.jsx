import "../styles/components/joinList.css";

export default function JoinList() {
  return (
    <div className="join_list2">
      <div className="content">
        <p>NEVER MISS A PREMIERE</p>

        <h3>
          BE THE FIRST TO KNOW ABOUT NEW PRODUCT RELEASES AND EXCLUSIVE
          MERCHANDISE. BECOME A FILMLANDER!
        </h3>

        <form action="submit">
          <input type="email" placeholder="Your Email" required />

          <button type="submit">Join the list</button>
        </form>
      </div>
    </div>
  );
}
