# 🚶 Movement

## Teleport an entity

<p>
  This will teleport the target entity to target location.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
      </th>
      <th>
        Description
      </th>
      <th>
        Default
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        target_location
      </td>
      <td>
        -
      </td>
      <td>
        Location targeter required. Where to teleport.
      </td>
      <td>
        target location
      </td>
    </tr>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        Entity targeter required. Entity to teleport.
      </td>
      <td>
        caster
      </td>
    </tr>
    <tr>
      <td>
        y_offset
      </td>
      <td>
        -
      </td>
      <td>
        Y offset applied to the target location.
      </td>
      <td>
        0
      </td>
    </tr>
  </tbody>
</table>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          example_mechanic
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mechanics
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'teleport{y_offset=0;target=caster;target_location={type=custom;world=world;x=-140,y=67,z=10}}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Set the velocity of an entity

<p>
  You need to use a variable in order to provide a position (&lt;=&gt; vector).
  In the following example, the vector is saved in the variable called
  <code>
    velocity1
  </code>
  .
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
      </th>
      <th>
        Description
      </th>
      <th>
        Default
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        Entity targeter required. Entity to set the velocity of.
      </td>
      <td>
        caster
      </td>
    </tr>
    <tr>
      <td>
        value
      </td>
      <td>
        val, v, vector, vec, velocity, vel
      </td>
      <td>
        Name of variable containing the vector (position) to set the velocity
        to.
      </td>
      <td>
        none
      </td>
    </tr>
  </tbody>
</table>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          example_mechanic
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mechanics
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_vector{var=velocity1;x=0;y=1;z=0}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_velocity{target=caster;value=velocity1}'
        </span>
      </span>
    </code>
  </pre>
</div>
