# 🔌 Other Plugins

<p>
  MMOInventory features native support for other item plugins. It can detect
  specific item from other plugins like
  <em>
    LoreAttributesRecoded
  </em>
  ,
  <em>
    Oraxen
  </em>
  or
  <em>
    Nexo
  </em>
  , but
  <strong>
    only using the item lore
  </strong>
  by detecting specific patterns inside of it. For instance, if your Sword
  items all have
  <code>
    &amp;cSword
  </code>
  in their item lore, MMOInventory is able to detect it and consequently
  apply slot restrictions to these items.
</p>
<p>
  This has the effect of creating "fictive item types", these are not real
  item types like with MMOItems but are still categories of items which share
  one property (that specific lore pattern).
</p>
<p>
  <code>
    loretag{tag="&amp;cRing"}
  </code>
  will only accept items which have a lore line that exactly matches
  <code>
    &amp;cRing
  </code>
  . Basic color codes are fully supported by this slot restriction.
  <code>
    loretag{tag="&amp;cSword";check=EQUALS}
  </code>
  will have the very same behaviour. The following item matches the slot
  restriction, as it has a lore line that exactly matches
  <code>
    &amp;cRing
  </code>
  .
</p>
<p>
  <img src="/assets/item1.D7tECfWH.png" alt="image">
</p>
<p>
  <code>
    loretag{tag="&amp;cRing";check=CONTAINS}
  </code>
  will accept items which have a lore line that contains
  <code>
    &amp;cRing
  </code>
  . The following item matches the slot restriction, even if the line where
  <code>
    &amp;cRing
  </code>
  appears also contains other text.
</p>
<p>
  <img src="/assets/item2.CyapwR1H.png" alt="image">
</p>
<p>
  Other possible checks are
  <code>
    STARTS_WITH
  </code>
  and
  <code>
    ENDS_WITH
  </code>
  which checks if any of the item lore lines starts/ends with the given
  string.
</p>
