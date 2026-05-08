# 🏷️ Item Modifiers

<div class="tip custom-block">
    <p class="custom-block-title custom-block-title-default">TIP</p>
    <p>Make sure you read <a href="./templates">this page</a> first. The MMOItems item generation system is pretty complex and needs some time to be fully understood.</p>
</div>

## Example

<p>Item modifiers are the <strong>MVP's of the MMOItems random loot generation system</strong>. Conceptually, an item always comes with its standard set of item stats. Take the following item for example - a Long Sword - it has 10 Atk damage and 1.6 Atk speed. These are its default stats, meaning if the item has no modifier, tier or anything attached to it, it will only have these stats.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code><span class="line">
            <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
            <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
        </span>
            <span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span>
            <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
        </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON_SWORD</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;fLong Sword'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-damage</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-speed</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.6</span>
            </span>
        </code>
    </pre>
</div>

<p><img src="https://docs.phoenixdevt.fr/assets/long_sword_no_mod.CTR3gi81.png" alt=""></p>

<p>Now imagine that 20% of the time, the following <code>Sharp</code> modifier now applies when generating this item. The stats provided by this modifier will stack up with the base item stats. The Atk damage is now <code>10 + 5 = 15</code> and the item now has extra lore.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sharp_modifier</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 20% chance to be selected</span>
            </span>
                <span class="line">
                    <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stats</span>
                    <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                    <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># additional stats provided</span>
                </span>
                <span class="line">
                    <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-damage</span>
                    <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                    <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span>
                </span>
                <span class="line">
                    <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lore</span>
                    <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
                </span>
            <span class="line">
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'Very sharp!'</span>
            </span>
        </code>
    </pre>
</div>

<p><img src="https://docs.phoenixdevt.fr/assets/long_sword_sharp.D-ne3qmG.png" alt=""></p>

<p>This means that there can be multiple versions of the same item, with different rarities, more or less powerful stats added to them.</p>

## Adding item modifiers to items

<p>For this tutorial, we will consider a sample item <em>Long Sword</em> with two potential item modifiers, <em>Sharp</em> (adds +5 Atk damage) and <em>Fiery</em> (adds an on-hit burning ability).</p>
<p>The following config snippet can be placed inside the <code>/MMOItems/items/sword.yml</code> config file.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Base item stats</span>
        </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IRON_SWORD</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;fLong Sword'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-damage</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    attack-speed</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.6</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Modifiers which have a chance to be rolled</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # First modifier, Sharp</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 10% chance to apply</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stats</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        attack-damage</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        lore</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;7Much sharper!'</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Second modifier, Fiery</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fiery</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 5% chance to apply</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stats</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        ability</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          on-hit</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">burn</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            mode</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on_hit</span>
            </span>
        </code>
    </pre>
</div>

<p>Let's break this config snippet down. We still have the base item stats under the <code>base</code> config section. These are the stats that the generated item will have if no modifier is applied.</p>

<p>What follows is the <code>modifiers</code> config section with two inner sections, one for each modifier (<code>sharp</code> and <code>fiery</code>). This is where you need to define all the modifiers that the generated item could potentially have. Modifiers are defined by the following properties: <strong>roll chance</strong>, <strong>weight</strong>, <strong>item stats</strong> and <strong>prefix or suffix</strong>.</p>

## Modifier roll chance

<p>Each modifier has a roll chance, which is the chance that the modifier will be applied to the generated item. In our example, the <em>Sharp</em> modifier has a 10% chance to be applied, and the <em>Fiery</em> modifier has a 5% chance to be applied. This means that if you generate 100 <em>Long Swords</em>, on average 10 of them will have the <em>Sharp</em> modifier and 5 of them will have the <em>Fiery</em> modifier.</p>
<p>This is by far the easiest and most straightforward way to implement randomness with modifiers.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 10% chance to apply</span>
            </span>
        </code>
    </pre>
</div>

## List of item stats

<p>These are the stats that will be added to the item if the modifier is applied. The format used here is the exact same as the one used to define base item stats in an <a href="./templates">item template</a>. You can add ANY stat, item option, ability... to the modifier <code>stats</code> section.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      stats</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        attack-damage</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        ability</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          on-hit</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">poison</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            type</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on-hit</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        attack-speed</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-0.1</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        lore</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'Lore line 1'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'Lore line 2'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        custom-model-data</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span>
            </span>
        </code>
    </pre>
</div>

## Prefixes & Suffixes

<p>Modifiers can also have prefixes and/or suffixes, which are automatically applied to the item name when the modifier is selected. Prefixes are added before the item name, suffixes after. You can define both a prefix and a suffix for a single modifier.</p>
<p>Prefixes and suffixes are entirely optional, you can have modifiers with no prefix or suffix at all.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      prefix</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;fSharp'</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # Optional</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      suffix</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;7of the Bear'</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Optional</span>
            </span>
        </code>
    </pre>
</div>

<p>The following syntax allows to limit the number of prefixes/suffixes shown on the item name, by setting a priority for each prefix/suffix. <strong>Only the prefixes/suffixes with the highest priority will show.</strong></p>

<ul><li>If a prefix/suffix has a higher priority than another prefix/suffix, only the high priority prefix/suffix will show.</li><li>If multiple prefixes/suffixes have the same priority, and if there are no other prefixes/suffixes with higher priority, all of them will show.</li></ul>

<p>The default priority is 0, so 1 would hide all prefixes/suffixes with priority 0 (or no priority), 2 would hide all prefixes/suffixes with priority 1 and 0, etc.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      prefix</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        format</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;fSharp'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        priority</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # integer expected</span>
            </span>
        </code>
    </pre>
</div>

## Modifier Weight & Capacity

<p>The problem with the roll chance system is that it does not allow to you control how many modifiers an item can have. An item with 10 modifiers with 50% roll chance can still have (although unlikely) up to 10 modifiers applied to it, which is not very suitable for gameplay balancing.</p>
<p>To solve this problem, MMOItems uses a <strong>modifier capacity</strong> system. Each item has a modifier capacity which is determined by its item tier (see <a href="./../features/tiers#modifier-capacity-item-generation">this wiki section</a> to learn how to setup modifier capacity for your items).</p>
<ul><li>Each modifier has a weight, which is the amount of capacity that the modifier will use up if it is applied to the item.</li><li>An item can only receive modifiers whose total weight is less than or equal to its modifier capacity.</li><li>Modifiers are only applied if they roll successfully AND if the item has enough remaining modifier capacity to receive them.</li></ul>

### An Example

<p>In the following example, the <em>Long Sword</em> has two modifiers, <em>Sharp</em> with a weight of 3 and <em>Fiery</em> with a weight of 2.</p>
<ul><li>If the item has a modifier capacity of at least 5, it can receive both modifiers as <code>capacity &gt; 3 + 2 = 5</code></li><li>If the item has a modifier capacity between 3 and 5 (), it can receive only one of these modifiers, either <em>Sharp</em> or <em>Fiery</em>.</li><li>If the item has a modifier capacity between 2 and 3, it can only receive the <em>Sharp</em> modifier.</li><li>If the item has a modifier capacity of less than 2, it cannot receive any modifier.</li></ul>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">LONG_SWORD</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      weight</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fiery</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      weight</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span>
            </span>
        </code>
    </pre>
</div>

<p>This modifier weight system adds up to the roll chance system! If the item has a modifier capacity of 5, <strong>it can receive both modifiers, but it does not mean that it will always receive both</strong>. Each modifier still has its own roll chance, so the item may receive either one of the two, both of them or none at all.</p>
<p>During item generation, MMOItems iterates through the whole modifier list, and for each modifier:</p>
<ol><li>Rolls the modifier chance. If the roll fails, it skips to the next modifier.</li><li>Checks if the item has enough remaining modifier capacity. If not, it skips to the next modifier.</li><li>Applies the modifier (stats and prefix/suffix) to the item,</li><li>Reduces the item's remaining modifier capacity by the modifier.</li><li>Goes back to step 1 until all modifiers have been processed.</li></ol>

### Use Case

<p>Weights only limit the number of modifiers an item can have, they do not guarantee that the item will have a certain number of modifiers. Therefore, you can use weights to balance items with a lot of modifiers and make sure they cannot have too many over-powered modifiers at the same time.</p>

## Public Modifiers

<p>Public modifiers are modifiers which you can use as shortcuts in order to spend less time in your item config files redefining the same modifiers over and over again. For instance, if you have multiple Swords in your game, and you want all of them to be able to roll the <em>Sharp</em> modifier, you can define this modifier once as a public modifier, and then reference it in all your sword item configs.</p>
<p>Head to the <code>/modifiers</code> folder and create a new YAML config file (it can have any name). This folder may contain as many config files and subfolders as you want, MMOItems will load them all. Every config file can contain as many public modifiers as you want.</p>

<p>Here is an example of a public modifier config file:</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Gives on-hit poison to target</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">toxic</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  prefix</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'&amp;2Toxic'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stats</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ability</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      on-hit</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">poison</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        type</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on-hit</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lore</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'Ouch-- so hot!!'</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Gives max mana</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">arcane</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  suffix</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'of the Arcane'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stats</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    max-mana</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      scale</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      spread</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.1</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      max-spread</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.3</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">of_accuracy</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #prefix: '&amp;bAccurate'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  suffix</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">'of Accuracy'</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stats</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    critical-strike-chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      spread</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.1</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      max-spread</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.3</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    weapon-damage</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      base</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      spread</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.1</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      max-spread</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.3</span>
            </span>
        </code>
    </pre>
</div>

<p>You can then reference these public modifiers in your item config files like this:</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">KATANA</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    toxic</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      weight</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.5</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Can still be edited</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Can still be edited</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # No need to provide anything else!</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    of_accuracy</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # ...</span>
            </span>
        </code>
    </pre>
</div>

<p>As you can see, you can still edit the roll chance and modifier weight to have it fine-tuned to the item you are working on, but you <strong>no longer need to redefine the stats, prefix and suffix</strong>.</p>

## Modifier Groups (MI 6.9.5+)

<div class="tip custom-block">
    <p class="custom-block-title custom-block-title-default">TIP</p>
    <p>We recommend getting familiar with the modifier system logic before continuing to this section as it starts getting a bit technical!</p>
</div>

<p>Modifier groups greatly increase the flexibility of the modifier system. They allow you to get much finer control over how many modifiers an item should have. Once you understand how modifier groups work, the possibilities for random loot are endless!</p>

### Overview

<p>Modifier groups are collections of modifiers (public or private) which can be used as a single modifier. When a modifier group is rolled (applied onto an item), it will roll all modifiers from its collection.</p>
<p>Beside making configuring multiple modifiers easier, modifier groups also allow you to <strong>set a minimum and maximum number of modifiers that will be applied from the group</strong>.</p>

### Configuration

<p>The following syntax snippet defines a public modifier group and can be pasted inside any YML config file located in the <code>/modifiers</code> folder.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sword_modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  min</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Optional</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  max</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Optional</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Default 1.0</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  weight</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Default 0.0</span>
            </span>
            <span class="line"></span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sharp</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 80% chance to be applied</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    toxic</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 5% chance to be applied</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fiery</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 5% chance to be applied</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    accurate</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 5% chance to be applied</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    arcane</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.05</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 5% chance to be applied</span>
            </span>
        </code>
    </pre>
</div>

<p>This modifier group contains three "sub-modifiers" : <code>toxic</code>, <code>sharp</code> and <code>fiery</code>.</p>
<p>The <code>min</code> and <code>max</code> options guarantee that at least 1 of these modifiers will be applied onto the item, and that at most 3 from these modifiers will be applied onto the item. Both of these options are optional, if you only specify the <code>min</code> option, then all modifiers could be rolled simultaneously (as long as the item has enough modifier capacity).</p>
<p>You can then reference this modifier group inside item configs, like in the following config snippet. The <code>sword_modifiers</code> group has a 30% chance to be rolled, and a weight of 1 if rolled. Modifier groups have their own roll chance and weight, just like simple modifiers.</p>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># items/sword.yml</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">KATANA</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    some_modifier</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    another_modifier</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sword_modifiers</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chance</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Default 1.0</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      weight</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # Default 0.0</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      min</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # Optional, overrides original value</span>
            </span>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      max</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span>
                <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # Optional, overrides original value</span>
            </span>
        </code>
    </pre>
</div>

### Note

<p>When generating an item, MMOItems first tries to roll all modifiers in the group and stops if it reaches the maximum number of modifiers. It will stop before reaching the maximum if the item runs out of modifier capacity, or if all modifiers have already been processed.</p>

<p>Then, if the minimum number of modifiers has not been reached, it will randomly sample and apply modifiers (according to their roll chance) from the group until the minimum is reached. If the item runs out of modifier capacity before reaching the minimum, it will stop and the item will have less modifiers than the minimum.</p>

<p>Note that when using modifier weights, the group is not guaranteed to reach the minimum number of modifiers, especially if the item starts with a low modifier capacity!</p>

<details><summary>Additional Note</summary> This modifier allocation problem is actually a very complex combinatorial optimization problem, and finding a working/optimal solution is not trivial at all. The algorithm used by MMOItems is a greedy heuristic but it's still quite good in practice! </details>

## Item stats which scale with the tier

<p>The following example shows a very nice use case for modifier groups. In classic MMOItems, item stat values usually scale with the item level. However, you may want to have stats which scale rather with the item tier. For instance, you may want a Rare item to always have +10% Critical Strike Chance, and a Legendary item to always have +20% Critical Strike Chance.</p>

<p>While this is possible with classic modifier rules, using modifier groups makes it much easier to setup and manage.</p>

## Modifiers as "nodes"
