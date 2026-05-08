# 📮 Events

## Profile Creation and Removal

<p>
  When a profile is created,
  <code>
    ProfileCreateEvent
  </code>
  is called. This event contains the player UUID and the profile UUID of
  the newly created profile. You can listen to this event to perform actions
  when a new profile is created. This event stores a
  <code>
    CompletableFuture&lt;Void&gt;
  </code>
  which is completed once all data modules have validated this event.
</p>
<p>
  <code>
    ProfileRemoveEvent
  </code>
  is called when a user permanently deletes one of their profile. You can
  use this event to remove the record corresponding to the deleted profile
  in your plugin's database. This event stores a
  <code>
    CompletableFuture&lt;Void&gt;
  </code>
  which is completed once all data modules have validated this event.
</p>

## Profile Selection and Unselection

<p>
  When a player selects a profile,
  <code>
    ProfileSelectEvent
  </code>
  is called. When all data modules have validated this event, the profile
  is applied to the player, that is, the player is teleported to its previous
  location, its inventory is restored, etc...
</p>
<p>
  When a player unselects a profile by either logging out, quitting their
  profile or switching to another profile,
  <code>
    ProfileUnloadEvent
  </code>
  is called.
</p>
<p>
  In case of a profile switch,
  <code>
    ProfileUnloadEvent
  </code>
  is guaranteed to be called before the
  <code>
    ProfileSelectEvent
  </code>
  of the new profile. In case of a logout or upon quiting the current profile
  with no switch, only
  <code>
    ProfileUnloadEvent
  </code>
  is called. On logouts,
  <code>
    ProfileUnloadEvent
  </code>
  is guaranteed to be called after
  <code>
    PlayerQuitEvent
  </code>
  .
</p>

## Proxy-Mode Events

<p>
  When proxy-mode profiles are enabled,
  <code>
    PlayerIdDispatchEvent
  </code>
  is called at least one tick after the player joins (after
  <code>
    PlayerJoinEvent
  </code>
  ) when the proxy finally provides the backend server with the player's
  real UUID and profile UUID.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    When the player joins the server, the player already has its spoofed UUID,
    as spoofing happens at the proxy-level. Therefore, the player's official
    UUID (as well as other generic player information) need to be forwarded
    from the proxy to the backend server, via plugin messages.
    <code>
      PlayerIdDispatchEvent
    </code>
    is called when the backend server receives this information from the proxy.
  </p>
</div>
