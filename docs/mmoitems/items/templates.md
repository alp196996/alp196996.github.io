# 🗡️ Item Templates

<p>When creating an item in MMOItems, you are actually creating an item <strong>template</strong>. An item template is composed of a set of <strong>default</strong> item options (display name, material, enchants, attack damage..), and a <strong>set of item modifiers</strong> which are chosen randomly and applied to the base item data when the item is given to a player.</p>
<p>When creating an item in MMOItems, you are actually creating an item <strong>template</strong>. An item template is composed of a set of <strong>default</strong> item options (display name, material, enchants, attack damage..), and a <strong>set of item modifiers</strong> which are chosen randomly and applied to the base item data when the item is given to a player.</p>
<p>This system designed is to make <strong>ONE item template</strong> able to generate <strong>MULTIPLE versions/instances</strong> of the same item. The item modifiers are what makes every version of the item unique: an endgame item instance would have many powerful modifiers while the newbie item instance would only have 1-2 weaker modifiers.</p>
<p>When being generated, items all have an <strong>item level</strong> which directly determines how strong the item stats are and a <strong>modifier capacity</strong> which determines how many modifiers the item can have. MMOItems item generator hooks onto the MMOItems tier system. The higher the item tier, the more modifiers the item has. In other words, the item tier determines the item <strong>modifier capacity</strong>.</p>

## Item Examples

<p>We'll be going over a few examples to understand the basic concept of the MMOItems item generator.</p>

### Example 1

<p><img src="https://docs.phoenixdevt.fr/assets/example_1a.TPcZOHMK.png" alt=""> <img src="https://docs.phoenixdevt.fr/assets/example_1b.DjgNdhf0.png" alt=""></p>

<p>
    These items use the same template, which is an item called <code>Long Sword</code>. However, the right one has a <code>Sharp</code> modifier which gives him +3 Atk Damage while the left one has no modifier.
</p>
<p>
    These two items have the same attack speed because it was chosen not to scale with the item level. However the attack damage does scale with the item level: although the first item has got a higher level, the second item has a <code>Sharp</code> modifier and therefore has more attack damage.
</p>
<p>
    The <code>Sharp</code> modifier gives the second item the <code>Sharp</code> prefix and adds an extra line of text in the item lore.
</p>

### Example 2

<p><img src="https://docs.phoenixdevt.fr/assets/example_1b.DjgNdhf0.png" alt=""> <img src="https://docs.phoenixdevt.fr/assets/example_2b.UTv87RmT.png" alt=""></p>

<p>The item at the right has a much higher item level and therefore his attack damage is much higher. It also has two modifiers: <code>Sharp</code> and <code>Fiery</code>. <code>Sharp</code> still gives the item +3 Atk Damage but it's pretty useless given its level. <code>Fiery</code> gives the item a nice red name prefix and an on-hit burn ability.</p>
<p>The second item has the <code>Rare</code> item tier, therefore has much more modifier capacity than the non-tiered sword, which explains why it received two modifiers. Non-tiered items also have a modifier capacity, but it is much lower.</p>
<p>You can only see the <code>Fiery</code> prefix because this modifier has a higher priority (although you can configure the modifiers so that all the prefixes show, and have funny item names with 10 suffixes or prefixes at the same time!).</p>
<p>Last but not least, a higher level does not always mean more modifiers - the modified weapon has a lower level than the one with no modifier.</p>

### Example 3

<p><img src="https://docs.phoenixdevt.fr/assets/example_3.B4EpXDWE.png" alt=""></p>

<p>The default item is a bow with some attack damage and crit chance. The first <code>Heavy</code> modifier makes it two-handed, adds a few attack points and some critical strike power. The second modifier which has a suffix adds an on-hit ability.</p>

## Example Item

<p>This is how an item template looks in the MMOItems config files.</p>
<div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON_SWORD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-damage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    critical-strike-chance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # More item stats here...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    first-modifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'Modifier Prefix'</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        attack-damage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # More item stats here...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    second-modifier</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      suffix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'Modifier Suffix'</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        pvp-damage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # More item stats here...</span></span></code></pre></div>

## Item Templates

<p>Item templates are the most fundamental tool to generate random items. They are defined by a list of <strong>default item stats</strong> which the resulting item will have no matter what, and a list of <strong>item modifiers</strong> which will be randomly picked and applied to the resulting item to impact its rarity.</p>

<div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Basic template options</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tiered</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    level-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    roll-modifier-check-order</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    capacity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Base item data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON_SWORD</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;fLong Sword'</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.6</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-damage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    required-level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Template modifiers</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;fSharp'</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        attack-damage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        lore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;7Much sharper!'</span></span></code></pre></div>

<p>Some comments on the config snippet above:</p>

<ul>
    <li>The <code>base</code> section corresponds to the base item stats. For example, the base item is an iron sword which name is <code>Long Sword</code>. The default attack speed is 1.6 and the weapon has 6 Atk damage increased by 1.5 point for every item level.</li>
    <li>The <code>option</code> section is used to configure a few additional options for your template. See next paragraph for more information.</li>
    <li>The <code>modifiers</code> section contains all the modifiers which can be applied to the item.</li>
</ul>

<p>Item generation templates can be found under the <code>/MMOItems/items</code> folder. You may add as many YML configs as you want in that folder to sort your templates.</p>

## Item Template Options

<p>A small list of extra options for your item template. Except capacity set them to <code>true</code> to enable them</p>

<table tabindex="0">
    <thead>
        <tr>
            <th>Template Option</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>roll-modifier-check-order</code></td>
            <td>Scrambles the item modifiers list before rolling them when generating items</td>
        </tr>
        <tr>
            <td><code>tiered</code></td>
            <td>A random tier will be picked for your item if none is specified when generating the item. This accounts for the <code>/mi generate</code> command, but also for station crafting recipes!</td>
        </tr>
        <tr>
            <td><code>level-item</code></td>
            <td>A random item level will be picked for your item if none is specified when generating the item.</td>
        </tr>
        <tr>
            <td><code>capacity</code></td>
            <td><code>capacity</code> can be used to impose a formula for modifier capacity to your item without having to use an item tier. It overrides both the default modifier capacity formula as well as the formula provided by the tier of the generated item.</td>
        </tr>
    </tbody>
</table>
