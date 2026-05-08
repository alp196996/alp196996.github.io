# 💸 Economy

<p>
  MMOCore comes along with a RPG styled physical currency system which consists
  in two types of items:
  <strong>
    bank notes
  </strong>
  and
  <strong>
    gold coins
  </strong>
  . Gold coins are always worth 1 gold however bank notes can be worth anything.
  This currency system not only add some RPGs atmosphere to your server because
  they can be used to trade, but they can also be added to mob drop tables
  e.g using MythicMobs to make dropping gold easier.
</p>

## Deposit

<p>
  Players can deposit their physical bank notes and gold coins directly
  into their Vault account. This can be used for instance like a bank safe
  where you can free some inventory space and yet still be able to use your
  digital Vault cash with NPCs.
</p>
<p>
  You can force open the deposit GUI using
  <code>
    /deposit &lt;player&gt;
  </code>
  or simply ask players to use
  <code>
    /deposit
  </code>
  if they have the
  <code>
    mmocore.currency
  </code>
  permission. Using extra plugins, you can also bind this command to specific
  blocks on right-click, for e.g enderchests, or even bind this command to
  NPCs using Citizens addons to make a Vault keeper NPC.
</p>
<p>
  <img src="/assets/deposit.CxVkBWvo.gif" alt="IDpIfft">
</p>

## Withdraw

<p>
  Withdrawing enables players to withdraw some Vault cash and get physical
  currencies for trading or in order to pay other players. You can star a
  withdraw request for a player using the
  <code>
    /withdraw &lt;player&gt;
  </code>
  command, or ask them to use
  <code>
    /withdraw
  </code>
  if they have the
  <code>
    mmocore.currency
  </code>
  permission.
</p>
<p>
  When a withdraw request is started, players are asked to type in the chat
  the amount they would like to withdraw. When withdrawing $54, players will
  receive 4 gold coins worth $1 each, and a $50 bank note:
  <code>
    withdraw = &lt;gold-coins&gt; * 1 + &lt;bank-notes&gt; * 10
  </code>
  .
</p>
<p>
  <img src="/assets/withdraw.DBBKbVhJ.gif" alt="VNe2NPr">
</p>
