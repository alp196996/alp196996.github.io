# Introduction

<p>
  Some mechanics require parameters like entities or positions: for instance,
  if you'd like to spawn a particle at a given position, you need to specify
  that exact position, which is done using
  <strong>
    targeters
  </strong>
  . If you'd like to deal X damage to an entity you must be able to tell
  ML what entity to damage.
</p>
<p>
  There are targeters for both
  <strong>
    entities
  </strong>
  and
  <strong>
    positions/locations
  </strong>
  . Targeters can return multiple entities or positions at the same time,
  in which case the same script/mechanic will be executed multiple times,
  once for every entity/position.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Targeter Type
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="./entity">
          Entity
        </a>
      </td>
      <td>
        Entity targeters
      </td>
    </tr>
    <tr>
      <td>
        <a href="./location">
          Location
        </a>
      </td>
      <td>
        Location/position targeters
      </td>
    </tr>
  </tbody>
</table>
