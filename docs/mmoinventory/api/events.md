# 📮 Events

<p>
  This page describes the Bukkit events fired by MMOInventory.
</p>

## <code>InventoryUpdateEvent</code>

<p>
  This event is called every time inventory content is changed.
  <code>
    #getPreviousItem
  </code>
  returns the previous item, or
  <code>
    null
  </code>
  if there wasn't one.
  <code>
    #getNewItem
  </code>
  returns the item being "equipped", or
  <code>
    null
  </code>
  if it is being removed.
  <code>
    #getInventoryData
  </code>
  returns the player's inventory data.
  <code>
    #getSlot
  </code>
  returns the clicked slot.
</p>
<p>
  This event cannot be canceled. It is notably used for broadcasting inventory
  updates to MMOItems.
</p>

## <code>ItemEquipEvent</code>

<p>
  This is the cancelable counterpart of
  <code>
    InventoryUpdateEvent
  </code>
  . It is only called when players click from inside the chest inventory.
  Note that this event is also called when players interact with custom slots
  inside their vanilla inventory.
</p>
<p>
  Note that editing items on clicks is not trivial, as it can lead to inconsistent
  behaviors with MMOItems inventory updates. Here are some solutions:
</p>
<ul>
  <li>
    either listen to one of the previous events, and schedule a task to edit
    it on the next tick using
    <code>
      InventoryData#setItem
    </code>
    ,
  </li>
  <li>
    or edit the equipped item
    <em>
      in place
    </em>
    , by setting its item type and item meta. Note that MMOItems sometimes
    does that for features like
    <em>
      in place
    </em>
    durability losses and item downgrades. You will need to resolve MMOItems
    modifiers from the inventory again afterward.
  </li>
</ul>
