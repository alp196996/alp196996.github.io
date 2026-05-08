# 🧌 MythicMobs

<p>
  Most of our mob features and custom drops tie into MythicMobs, the best
  mob creation plugin. Also
  <strong>
    one of the most important features
  </strong>
  , in order to create your own skills through MMOCore, you will utilize
  MythicMobs to make any skill you want. More info
  <a href="./../skills/intro#custom-skills">
    here
  </a>
  .
</p>
<p>
  MythicMobs also adds more options to the quest system: you can setup quests
  where players must kill X mobs from MythicMobs, more info
  <a href="./../features/quests">
    here
  </a>
  .
</p>
<p>
  Players may also earn main-class experience when killing mobs from MythicMobs,
  more info on that
  <a href="./../profession/intro">
    wiki page
  </a>
  .
</p>

## MythicMobs drop items

<p>
  MMOCore adds new drop item types to MythicMobs drop tables, here is the
  list:
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Drop Item
      </th>
      <th>
        Usage
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Gold Pouch
      </td>
      <td>
        <code>
          gold_pouch{min=10;max=100}
        </code>
      </td>
      <td>
        Gold pouch containing a random amount of $$ between MIN and MAX
      </td>
    </tr>
    <tr>
      <td>
        Gold Coin
      </td>
      <td>
        <code>
          gold_coin{}
        </code>
      </td>
      <td>
        Drops a gold coin worth $1
      </td>
    </tr>
    <tr>
      <td>
        Note
      </td>
      <td>
        <code>
          note{minw=20;maxw=30}
        </code>
      </td>
      <td>
        Drops a note with random value.
      </td>
    </tr>
  </tbody>
</table>

## Gold Pouches

<p>
  Gold pouches are leather pieces you can right click in order to open a
  2-rows GUI which contains randomly generated gold coins and notes. Players
  cannot place any item in there, they may only take items from it if they
  have some space left in their inventory. Pouches
  <strong>
    are taken off the player inventory
  </strong>
  when fully emptied.
</p>
<p>
  <img src="/assets/gold_pouch.BYKMWIZW.gif" alt="pp">
</p>
