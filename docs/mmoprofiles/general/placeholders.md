# 🏷️ Placeholders

<p>
  All placeholders automatically register on plugin load, also requiring
  <strong>
    PlaceholderAPI
  </strong>
  to work. You do not need to run any commands and/or download anything
  else to initialize the placeholders.
</p>
<p>
  Note: You can access the PAPI placeholders from MVdWPlaceholderAPI using
  <code>
    {placeholderapi_mmoprofiles_...}
  </code>
</p>

## Main Placeholders

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmoprofiles_real_uuid%
        </code>
      </td>
      <td>
        The official player's UUID (only has sense if proxy-based profiles are
        enabled)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_current_profile_uuid%
        </code>
      </td>
      <td>
        The UUID of the player's current profile.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_current_profile_name%
        </code>
      </td>
      <td>
        Returns the profile name of the player's current profile
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_current_profile_slot%
        </code>
      </td>
      <td>
        Returns the slot (integer) corresponding to the current profile.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_amount_profiles%
        </code>
      </td>
      <td>
        The number of profiles the player registered.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_profile_slots%
        </code>
      </td>
      <td>
        The total number of profiles the player can register.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_remaining_profile_slots%
        </code>
      </td>
      <td>
        The remaining amount of profiles the player can register.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmoprofiles_profile_name_{slot}%
        </code>
      </td>
      <td>
        The name of the profile at slot {slot}.
      </td>
    </tr>
  </tbody>
</table>
