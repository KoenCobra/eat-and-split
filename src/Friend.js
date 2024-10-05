export function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <span>{friend.name}</span>
      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
    </li>
  );
}
