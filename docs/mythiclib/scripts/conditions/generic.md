# Generic

## Expression Check

<p>
  Use this condition to perform arithmetic and boolean calculations. You
  can use placeholders from PAPI returning
  <code>
    true
  </code>
  or
  <code>
    false
  </code>
  as well as logical operators (negation
  <code>
    !
  </code>
  , or
  <code>
    ||
  </code>
  , and
  <code>
    &amp;&amp;
  </code>
  ) and MythicLib will parse and compute the result of your boolean formula.
</p>
<p>
  This can be used to multiple compare numbers simultaneously, for instance
  using
  <code>
    (a &lt; b) &amp;&amp; (c &gt;= d)
  </code>
  . The brackets are not mandatory but can help with readability. You can
  add as many spaces as you want between the different parts of the formula
  for better clarity.
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
        formula
      </td>
      <td>
        form, f, expression, expr, e
      </td>
      <td>
        The boolean formula to evaluate.
      </td>
      <td>
        -
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
          condition_generic_1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'boolean{formula=" (%mmocore_in_combat% || %mmocore_in_combat%) &amp;&amp;
          true"}'
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
          'message{format="You are in combat!"}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          condition_generic_2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'boolean{formula="(&lt;caster.health&gt; &lt;= 10 &amp;&amp; &lt;caster.health&gt;
          &gt; 5) || (!%mmocore_in_combat%)"}'
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
          'message{format="Condition met!"}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Has Variable

<p>
  Checks if a variable exists. This can also be used against a reserved
  variable like
  <code>
    target
  </code>
  or
  <code>
    target_location
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
        variable
      </td>
      <td>
        var, v, name, n
      </td>
      <td>
        Name of the variable to check for.
      </td>
      <td>
        -
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
          condition_has_variable
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'has_variable{var=target_location}'
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
          'message{format="The variable target_location exists!"}'
        </span>
      </span>
    </code>
  </pre>
</div>

## String Contain

<p>
  Use this condition to check if some string contains another string.
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
        within
      </td>
      <td>
        in
      </td>
      <td>
        The string to search in.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        search
      </td>
      <td>
        lookfor, look, lf
      </td>
      <td>
        The string to search for.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        ignore_case
      </td>
      <td>
        ic
      </td>
      <td>
        Whether to ignore case when comparing the strings.
      </td>
      <td>
        false
      </td>
    </tr>
  </tbody>
</table>
<p>
  This example script checks if the target entity is either a Zombie or
  a Skeleton.
</p>
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
          condition_string_contain
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'string_contains{in="ZOMBIE,SKELETON";look="&lt;target.type&gt;"}'
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
          'message{format="Target is either a Zombie or a Skeleton!"}'
        </span>
      </span>
    </code>
  </pre>
</div>

## String Match

<p>
  Use this condition to check if two strings match exactly.
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
        first
      </td>
      <td>
        one, left, lhs
      </td>
      <td>
        The first string.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        second
      </td>
      <td>
        two, right, rhs
      </td>
      <td>
        The second string.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        ignore_case
      </td>
      <td>
        ic
      </td>
      <td>
        Whether to ignore case when comparing the strings.
      </td>
      <td>
        false
      </td>
    </tr>
  </tbody>
</table>
<p>
  This checks if the player is in a certain world:
</p>
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
          condition_string_eq
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'string_equals{first="&lt;target.location.world.name&gt;";second="spawn"}'
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
          'message{format="You are in the spawn world!"}'
        </span>
      </span>
    </code>
  </pre>
</div>
