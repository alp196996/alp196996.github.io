# 🌱 Skill Trees

<p>
  Skill trees are a combination of nodes which can be unlocked/levelled-up
  using skill tree points. Levelling up a skill tree node can give stats
  or can run some triggers for the player. You can also reset the progress
  for a skill tree and gain the skill tree points spent for it by using a
  skill tree reallocation point.
</p>
<details class="details custom-block">
  <summary>
    Skill Tree Basic Config Example
  </summary>
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
            id
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            "custom_combat"
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Unique Identifier for the Skill Tree
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            "Combat"
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Name of the skill tree that will be displayed in the GUI
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            type
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            custom
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # See below for explanations
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            max-points-spent
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Maximum amount of points spent in that skill tree
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
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
            "&amp;6This skill tree is used for combat abilities!"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            icon
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # The item representing the skill tree in the GUI.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            material
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            GOLDEN_AXE
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item_flags
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            HIDE_ATTRIBUTES
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #custom_model_data: 10
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #custom_model_data_string: 'test'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #item_model: 'minecraft:dirt'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            "Mana Regeneration"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            -3,-2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            paths
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            path1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            -2,-2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            path2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            -1,-2
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            max-level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            is-root
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            point-consumed
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            experience-table
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            first_table_item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            triggers
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
            'stat{stat="MANA_REGENERATION";amount=1;type="FLAT"}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            second_table_item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            triggers
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
            'stat{stat="MANA_REGENERATION";amount=1;type="FLAT"}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lores
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
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
            "&amp;eMana regen in pts/sec +1"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
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
            "&amp;eMana regen in pts/sec +1"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
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
            "&amp;eMana regen in pts/sec +1"
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>

## Linking a skill tree to a class

<p>
  Skill trees are class-based, which means that the skill trees you can
  see and your progress for them depends on your current
  <a href="./../features/classes">
    class
  </a>
  . Each player can spend points in trees linked to its current class. You
  can link skill trees using the following syntax, inside any class configuration
  file:
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # MMOCore/classes/mages.yml
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          skill-trees
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
          "skill-tree-id1"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "skill-tree-id2"
        </span>
      </span>
    </code>
  </pre>
</div>

## Skill Tree Points

<p>
  You can use the following command to give skill tree points to players.
  The
  <code>
    id
  </code>
  represents the identifier of the skill tree you want to give points to.
  These points will only be usable for the corresponding skill tree. If you
  want to give skill tree points usable for any skill tree, use the id
  <code>
    global
  </code>
  .
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          /mmocore admin skill-tree-points give &lt;player&gt; &lt;number&gt; &lt;id&gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  One of the main ways you will be giving players skill tree points is through
  command triggers in experience tables. In the following example, a player
  will receive 1 skill tree point useable for the skill tree with ID
  <code>
    archerSkillTree
  </code>
  every time they level up.
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # MMOCore/exp-tables/default_exp_tables.yml
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          example_archer_exp_table
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          give_one_skill_tree_point
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          period
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          triggers
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
          'command{format="mmocore admin skill-tree-points give %player% archerSkillTree"}'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also use the following command to give skill tree reallocation
  points to players.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          /mmocore admin skill-tree-realloc-points give &lt;player&gt; &lt;number&gt;
        </span>
      </span>
    </code>
  </pre>
</div>

### Max Points Spent

<p>
  This field corresponds to the maximum amount of points that a player can
  spend in a skill tree. If unspecified, there will be no limit to the amount
  of points a player can spend in the skill tree.
</p>

## Nodes

<p>
  A skill tree is comprised of multiple nodes. Nodes are what the player
  interact with in order to unlock new skills and perks. These nodes can
  either be linked together through paths, requirements and incompatibilities,
  or be independently leveled up. Players spend skill tree points on specific
  nodes in order to unlock/level them up.
</p>
<p>
  The skill tree nodes go under the
  <code>
    nodes
  </code>
  subsection in the skill tree YML config.
</p>

### Node States

<p>
  A skill tree node can be in one of the five following states.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        State
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Unlocked
      </td>
      <td>
        The node is at least at level 1 and is already unlocked
      </td>
    </tr>
    <tr>
      <td>
        Maxed Out
      </td>
      <td>
        The node has reached its maximum level.
      </td>
    </tr>
    <tr>
      <td>
        Locked
      </td>
      <td>
        The node is not accessible to the player yet, but might be in the future
      </td>
    </tr>
    <tr>
      <td>
        Fully Locked
      </td>
      <td>
        The player made a branching choice, rendering this node inaccessible unless
        a respec is performed
      </td>
    </tr>
    <tr>
      <td>
        Unlockable
      </td>
      <td>
        The node can be unlocked for N skill tree points
      </td>
    </tr>
  </tbody>
</table>
<p>
  You can modifiy the display name of each state in the
  <code>
    node-status
  </code>
  section in the
  <code>
    gui/skill-tree.yml
  </code>
  config file.
</p>

### Coordinates

<p>
  To be represented in the GUI, each skill tree node has unique coordinates
  defining where it will be displayed. The coordinates can be as large as
  you want (e.g x:15 y:0). You might have to move around in the GUI using
  the arrows to see nodes that are further way from the origin
  <code>
    (x=0,y=0)
  </code>
  .
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;6Extra Atk Damage'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          coordinates
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          0,0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  <img src="/assets/skill_tree_ui_grid.CJcoAizS.jpeg" alt="Coordinates">
</p>

### Parents (Strong)

<p>
  All the strong parents of any node must be unlocked before that node can
  be unlocked.
</p>
<details>
  <summary>
    Example 1
  </summary>
  <p>
    In the following example,
    <code>
      a2
    </code>
    ,
    <code>
      a3
    </code>
    and
    <code>
      a4
    </code>
    are strong children of
    <code>
      a1
    </code>
    . In order to unlock
    <code>
      a2
    </code>
    ,
    <code>
      a3
    </code>
    or
    <code>
      a4
    </code>
    , the player must get
    <code>
      a1
    </code>
    to level 2, 1 or 3 respectively.
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            children
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            strong
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a3
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a4
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            3
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a3
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a4
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<details>
  <summary>
    Example 2
  </summary>
  <p>
    In the following example,
    <code>
      a1
    </code>
    is a strong parent of both
    <code>
      a2
    </code>
    and
    <code>
      a3
    </code>
    . In order to unlock
    <code>
      a2
    </code>
    or
    <code>
      a3
    </code>
    , the player must get
    <code>
      a1
    </code>
    to level 2 or 1 respectively.
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            parents
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            strong
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a3
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            parents
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            strong
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>

### Parents (Soft)

<p>
  Soft parents are similar to strong parents, except that you only need
  to unlock at least one soft parent, instead of all of them.
</p>
<details>
  <summary>
    Example 1
  </summary>
  <p>
    In the following example, reaching level 3 of
    <code>
      a1
    </code>
    is sufficient to unlock
    <code>
      a2
    </code>
    , and reaching level 2 of
    <code>
      a1
    </code>
    is sufficient to unlock
    <code>
      a3
    </code>
    .
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            children
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            soft
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            3
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a3
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a3
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<details>
  <summary>
    Example 2
  </summary>
  <p>
    In the following example, in order to unlock
    <code>
      a3
    </code>
    , the player can either reach level 3 of
    <code>
      a1
    </code>
    or level 2 of
    <code>
      a2
    </code>
    (one suffices).
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a3
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            children
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            soft
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            3
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            level
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  If a node has both strong and soft parents, the requirements stack up.
  The player must unlock all the strong parent nodes, and at least one node
  among the soft parents.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    Note that the
    <code>
      children
    </code>
    and
    <code>
      parents
    </code>
    options are pretty much symetrical. The following syntaxes are completely
    equivalent:
  </p>
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <div class="column" style="padding: 0px 5px 0px 0px; border-radius: 8px;">
      <div class="language-yml">
        <button title="Copy Code" class="copy">
        </button>
        <span class="lang">
          yml
        </span>
        <pre class="shiki shiki-themes github-light github-dark" tabindex="0"
        dir="ltr" style="--shiki-light: #24292e; --shiki-dark: #e1e4e8; --shiki-light-bg: #fff; --shiki-dark-bg: #24292e;">
          <code>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                nodes
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                a1
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #005CC5; --shiki-dark: #79B8FF;">
                ...
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                children
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                strong
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                a2
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
              <span style="--shiki-light: #005CC5; --shiki-dark: #79B8FF;">
                3
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                a2
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #005CC5; --shiki-dark: #79B8FF;">
                ...
              </span>
            </span>
          </code>
        </pre>
      </div>
    </div>
    <div class="column" style="padding: 0px 0px 0px 5px; border-radius: 8px;">
      <div class="language-yml">
        <button title="Copy Code" class="copy">
        </button>
        <span class="lang">
          yml
        </span>
        <pre class="shiki shiki-themes github-light github-dark" tabindex="0"
        dir="ltr" style="--shiki-light: #24292e; --shiki-dark: #e1e4e8; --shiki-light-bg: #fff; --shiki-dark-bg: #24292e;">
          <code>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                nodes
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                a1
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #005CC5; --shiki-dark: #79B8FF;">
                ...
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                a2
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #005CC5; --shiki-dark: #79B8FF;">
                ...
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                parents
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                strong
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
            </span>
            <span class="line">
              <span style="--shiki-light: #22863A; --shiki-dark: #85E89D;">
                a1
              </span>
              <span style="--shiki-light: #24292E; --shiki-dark: #E1E4E8;">
                :
              </span>
              <span style="--shiki-light: #005CC5; --shiki-dark: #79B8FF;">
                3
              </span>
            </span>
          </code>
        </pre>
      </div>
    </div>
  </div>
  <p>
    You can either define
    <code>
      a2
    </code>
    as the child of
    <code>
      a1
    </code>
    , or
    <code>
      a1
    </code>
    as the parent of
    <code>
      a2
    </code>
    . Both of these syntaxes will lead to the exact same behaviors.
  </p>
  <p>
    For each node config, you can define
    <code>
      parents
    </code>
    and/or
    <code>
      children
    </code>
    , or none.
  </p>
</div>

### Incompatible Nodes

<p>
  Nodes can be incompatible with each other, meaning that they permanently
  lock if other nodes have already been unlocked.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    Although it is not its best use case, this feature can be used to recreate
    the
    <code>
      max-children
    </code>
    option (described
    <a href="#maximum-children">
      below
    </a>
    ). It is most useful in specific cases where you have two distant nodes
    that introduce incompatibilities or bugs when used together.
  </p>
</div>
<p>
  In the following example, if
  <code>
    a2
  </code>
  reaches level 1, or if
  <code>
    a3
  </code>
  reaches level 2,
  <code>
    a1
  </code>
  permanently locks (until a respec).
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;6Extra Atk Damage'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parents
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          incompatible
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          2
        </span>
      </span>
    </code>
  </pre>
</div>

### Lore

<p>
  The
  <code>
    lore
  </code>
  is displayed in the skill-tree GUI through the
  <code>
    {node-lore}
  </code>
  placeholder in
  <code>
    gui/skill-tree.yml
  </code>
  . If you want to fully customize the lore each node has, you can include
  in it all the placeholders that are used for the node item lore in
  <code>
    gui/skill-tree.yml
  </code>
  (
  <code>
    {current-level}
  </code>
  ,
  <code>
    {current-state}
  </code>
  ,
  <code>
    {max-level}
  </code>
  ...).
</p>

### Root Nodes

<p>
  Root nodes are the first nodes to be unlocked in a skill tree. Note that
  skill trees should have at least one root node. To mark a node as a skill
  tree root, use the following syntax:
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;6Some Node'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          root
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Here!
        </span>
      </span>
    </code>
  </pre>
</div>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    It is possible for skill trees to have no root nodes, if you make sure
    some quest or event in your storyline unlocks the first skill tree node,
    through the use of a command for instance.
  </p>
</div>

### Permission Required

<p>
  The option
  <code>
    permission-required
  </code>
  mandates that the corresponding permission is required to unlock the skill
  tree node. If this option is left unfilled, there will be no restrictions
  on permission to advance and unlock the skill tree node.
</p>

### Maximum Children

<p>
  Nodes work under a parent/children system. A node may only be available
  if all (or at least N) of its parents are unlocked. The
  <code>
    max-children
  </code>
  option allows you to limit the number of unlocked children a parent node
  can have.
</p>
<p>
  This has the effect of creating a fork in the skill tree, where players
  need to choose between two different play styles.
</p>
<p>
  In the following example, the node
  <code>
    a1
  </code>
  has two children
  <code>
    a2
  </code>
  and
  <code>
    a3
  </code>
  . Since
  <code>
    max-children
  </code>
  is set to 1, the player can only unlock one of the two. As soon as the
  player unlocks any of the two, the other will be permanently locked (until
  a respec).
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max-children
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parents
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          strong
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          level
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parents
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          level
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
    </code>
  </pre>
</div>

### Experience Tables

<p>
  Each node has an experience table associated with it. More about Experience
  Tables
  <a href="./../level/tables">
    here
  </a>
</p>

### Node Display Options

<p>
  The optional field
  <code>
    display
  </code>
  enables you to have a specific icon for the node depending on its state.
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          display
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlocked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'WHITE_CONCRETE:0'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlockable
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'BLUE_CONCRETE:0'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          locked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'GRAY_CONCRETE:0'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          fully-locked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'BLACK_CONCRETE:0'
        </span>
      </span>
    </code>
  </pre>
</div>

### Max Level

<p>
  This is the maximum level you can reach for this skill tree node.
</p>

### Points Consumed

<p>
  The optional field
  <code>
    point-consumed
  </code>
  lets you set the number of skill tree points required to upgrade this
  skill tree node. It defaults to 1.
</p>

## Paths

<p>
  "Paths" are the connections in between nodes. They are only for visual
  representation, as players cannot directly interact with paths.
</p>
<p>
  Any pair of (node, child) can have a path. A path consists in list of
  grid coordinates, that it should occupy inside the chest inventory.
</p>

### States

<p>
  A path can exist in three different states, which will modify its appearance.
  More information about these icons can be found
  <a href="#node-display-options">
    here
  </a>
  . A path is considered "unlocked" if both of the nodes it connects are
  also unlocked. If one of the two nodes is fully locked, the path is considered
  "fully-locked." Otherwise, the path is simply "locked."
</p>

### Example

<p>
  In the following example, the node
  <code>
    a1
  </code>
  has two children
  <code>
    a2
  </code>
  and
  <code>
    a3
  </code>
  . The
  <code>
    a1
  </code>
  to
  <code>
    a2
  </code>
  path occupies all grid coordinates in between these two nodes (same for
  <code>
    x=1,y=0
  </code>
  and
  <code>
    x=2,y=0
  </code>
  ). Same for the path from
  <code>
    a1
  </code>
  to
  <code>
    a3
  </code>
  .
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          coordinates
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          0,0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          children
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          strong
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          level
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          paths
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '1 0'
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '2 0'
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          level
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          paths
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '-1 0'
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '-2 0'
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          coordinates
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          3,0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          coordinates
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          -3,0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Paths can take turn but cannot split. You cannot have one node linked
  to multiple other nodes using a single path. You must have one path per
  (node, parent) pair.
</p>

## Icons

<p>
  You have the ability to fully customize the appearance of the skill tree
  graphical user interface (GUI) by creating different displays for each
  possible node or path configuration. To make these changes, you can modify
  the file located in
  <code>
    gui/skill-tree.yml
  </code>
  , which will automatically select the appropriate display for each node
  or path. This configuration can also be done in each skill-tree config
  in order to have different GUI display for each skill-tree. As stated above
  each node can have its own look by filling the display section for it.
</p>
<p>
  Here is how the display will be chosen for a node / path:
</p>
<ul>
  <li>
    If it is a node and has a specific display corresponding to its state
    then this will be its display.
  </li>
  <li>
    Else if there is a display in the skill tree config it will take it.
  </li>
  <li>
    Else it will take the display specified in
    <code>
      gui/skill-tree.yml
    </code>
    .
  </li>
</ul>
<p>
  Let's now dive in how the display section works in the skill-tree config
  and
  <code>
    gui/skill-tree.yml
  </code>
  :
</p>
<p>
  The display of a node/ path depends on both its neighborhood and its state.
  You can for example define a display for each node in the unlocked state
  and with 2 path at its left and right by being in nodes.unlocked.right-left.
</p>
<p>
  The process is exactly the same for paths with 4 possible state for each
  path:
</p>
<ul>
  <li>
    Unlocked if the 2 node it links are unlocked.
  </li>
  <li>
    Unlockable if one node is unlocked while the other is unlockable.
  </li>
  <li>
    Locked if one of the 2 nodes is locked.
  </li>
  <li>
    Fully locked if one of the 2 nodes is fully locked.
  </li>
</ul>
<p>
  The neighborhood also impacts the display of a path. For instance, if
  a path has a branch that goes up and ones that goes right, it will take
  the item associated with "up," followed by "down-right," and finally "right."
  This is a symmetrical process, so if a path goes left and then down, it
  will look identical.
</p>
<p>
  The same rule applies for nodes. For example, if a node is surrounded
  by four paths, it will display the "up-right-down-left" configuration.
  Alternatively, if a node has only three paths (up, left, and right), it
  will automatically select the "up-right-left" display.
</p>
<p>
  Here is a full example to show what the display enables you to do:
</p>
<div>
  <p>
    <img src="/assets/skill_tree_ui_scheme.CBu188Oo.png" alt="Skilltree">
  </p>
</div>
Here the nodes 1,3,5,7,9 are unlocked. This makes the display for paths
2,4,6,8 be unlocked as the 2 nodes each path is linking are unlocked. The
node 11 is unlockable making the path 10 unlockable also. Finally 22,24,25
are fully locked making the corresponding path have the fully locked display.
The rest corresponds to the locked state. Now regarding the direction,
here is an extensive list of the directions and state of each node/path:
<table tabindex="0">
  <thead>
    <tr>
      <th>
        No
      </th>
      <th>
        Display Icon
      </th>
      <th>
        No
      </th>
      <th>
        Display Icon
      </th>
      <th>
        No
      </th>
      <th>
        Display Icon
      </th>
      <th>
        No
      </th>
      <th>
        Display Icon
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        1
      </td>
      <td>
        unlocked:down
      </td>
      <td>
        8
      </td>
      <td>
        unlocked:right
      </td>
      <td>
        15
      </td>
      <td>
        locked:up
      </td>
      <td>
        22
      </td>
      <td>
        fully-locked:down-right
      </td>
    </tr>
    <tr>
      <td>
        2
      </td>
      <td>
        unlocked:up
        <br>
        (same as down as this is symetric)
      </td>
      <td>
        9
      </td>
      <td>
        unlocked:right-left
      </td>
      <td>
        16
      </td>
      <td>
        locked:down-left
      </td>
      <td>
        23
      </td>
      <td>
        fully-locked:right
      </td>
    </tr>
    <tr>
      <td>
        3
      </td>
      <td>
        unlocked:up-down
      </td>
      <td>
        10
      </td>
      <td>
        unlockable:right
      </td>
      <td>
        17
      </td>
      <td>
        locked:right-left
      </td>
      <td>
        24
      </td>
      <td>
        fully-locked:right-left
      </td>
    </tr>
    <tr>
      <td>
        4
      </td>
      <td>
        unlocked:up
      </td>
      <td>
        11
      </td>
      <td>
        unlockable: right-left
      </td>
      <td>
        18
      </td>
      <td>
        locked:right
      </td>
      <td>
        25
      </td>
      <td>
        fully-locked:left
      </td>
    </tr>
    <tr>
      <td>
        5
      </td>
      <td>
        unlocked:up-right
      </td>
      <td>
        12
      </td>
      <td>
        locked:up-left
      </td>
      <td>
        19
      </td>
      <td>
        locked:right-left
      </td>
      <td>
        26
      </td>
      <td>
        fully-locked:up
      </td>
    </tr>
    <tr>
      <td>
        6
      </td>
      <td>
        unlocked:right
      </td>
      <td>
        13
      </td>
      <td>
        locked:up
      </td>
      <td>
        20
      </td>
      <td>
        locked:right
      </td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        7
      </td>
      <td>
        unlocked:up-right-left
      </td>
      <td>
        14
      </td>
      <td>
        locked:up-down
      </td>
      <td>
        21
      </td>
      <td>
        locked:right
      </td>
      <td>
      </td>
      <td>
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Example config in skill-tree.yml or in skill-tree configs.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          display
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          paths
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlocked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-right
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          down-right
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          down-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          right
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          default
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_DYE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          locked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlockable
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          fully-locked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlocked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-right-down-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-right-down
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-right-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-down-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          down-right-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-right
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-down
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          down-right
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          down-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          right-left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          right
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          left
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          up
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          down
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          no-path
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "WHITE_CONCRETE:0"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          locked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlockable
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          fully-locked
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
    </code>
  </pre>
</div>

## Skill Tree GUI

<p>
  There are 2 ways of opening a skill tree UI:
</p>
<p>
  The first option is to use
  <code>
    /skilltrees
  </code>
  , which will open the GUI using the
  <code>
    gui/skill-tree.yml
  </code>
  configuration file. It allows you to browse through each skill tree within
  the GUI. You can enable or disable this feature by modifying the
  <code>
    enable-global-skill-tree-gui
  </code>
  field in the
  <code>
    config.yml
  </code>
  file.
</p>
<p>
  The second option is to use
  <code>
    /skilltrees
  </code>
  to open a specific skill tree without the ability to browse between skill
  trees. This will utilize the GUI configuration file from
  <code>
    gui/specific-skill-tree/specific-skill-tree-&lt;skill-tree-id&gt;.yml
  </code>
  . Make sure that your skill tree IDs follow the YAML format to avoid any
  issues. If no configuration is found, it will load the GUI from
  <code>
    gui/specific-skill-tree/specific-skill-tree-default.yml
  </code>
  . You can also toggle this feature on or off by modifying the
  <code>
    enable-specific-skill-tree-gui
  </code>
  field in the
  <code>
    config.yml
  </code>
  file.
</p>

## Skill Tree Types (MMOCore 1.21.1+)

<p>
  There are currently two types of skill trees. Using some type or another
  does not add, nor remove any feature from your skill tree, it only makes
  it easier to setup skill trees in certains scenarios, since skill tree
  config files can quickly get big.
</p>

### Custom Skill Trees

<p>
  If you don't specify the
  <code>
    type
  </code>
  option for a skill tree, it will be set to
  <code>
    CUSTOM
  </code>
  by default. When using a custom skill tree, you need to manually provide
  all relations between skill tree nodes, as well as the location of all
  the paths between the nodes. In order to create a custom skill tree, simply
  use the following syntax:
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
          id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "sample_skill_ree"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;6My Skill Tree"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          CUSTOM
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # &lt;&lt;==== Here
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          ...
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  MMOCore will automatically infer that skill tree nodes with NO parents
  whatsoever are root nodes.
</p>

### Proximity Skill trees

<p>
  Proximity skill trees are a simplified version of custom skill trees where
  you sometimes don't need to provide parenting relations between the nodes.
  In order to create a proximity skill tree, change the
  <code>
    type
  </code>
  config option to
  <code>
    PROXIMITY
  </code>
  inside your skill tree config file.
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
          id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "sample_skill_ree"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;6My Skill Tree"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PROXIMITY
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # &lt;&lt;==== Here
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          ...
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Any two neighboring nodes are automatically marked as soft parents. In
  other words, leveling up any node automatically unlocks the neighboring
  nodes. Every skill tree node has four direct neighbors (up, down, left
  and right neighbor).
</p>
<p>
  Some examples (click to expand):
</p>
<details>
  <summary>
    These two nodes are parents as they are direct neighbors.
  </summary>
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Cooldown Reduction I'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            2,1
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Cooldown Reduction II'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            2,2
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<details>
  <summary>
    These 2 nodes are NOT parents, as they are not direct neighbors.
  </summary>
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Cooldown Reduction I'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            2,1
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Cooldown Reduction II'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            2,4
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  When setting up a proximity skill tree, you can still make use of custom
  soft/hard/incompatible node parenting rules as well as paths. Using a proximity
  skill tree simply gives you a skeleton for your skill tree and spares you
  some syntax.
</p>
<details>
  <summary>
    Defining parents inside a proximity skill tree
  </summary>
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
            nodes
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Cooldown Reduction I'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            2,1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            children
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # This syntax still works.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            strong
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            a2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Cooldown Reduction II'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            coordinates
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            2,4
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  It is impossible for MMOCore to infer skill tree roots from a linked skill
  tree, because every non-isolated skill tree node has at least one parent/child
  node. For this reason, you need to specify at least one root node manually
  in your proximity skill tree! As a reminder, this is done using the following
  option:
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
          nodes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          a1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;6Some Node'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          root
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This option
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
    </code>
  </pre>
</div>
